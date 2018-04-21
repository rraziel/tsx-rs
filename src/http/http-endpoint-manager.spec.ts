import {HttpEndpointManager} from './http-endpoint-manager';
import {HttpHeader} from './http-header';
import {HttpHeaders} from './http-headers';
import {HttpRequest} from './http-request';
import {HttpRequestBuilder} from './http-request-builder';
import {HttpResponse} from './http-response';
import {HttpStatuses} from './http-statuses';
import {Consumes, GET, Path, POST, Produces} from '../decorators';

describe('HTTP endpoint manager', () => {
    let httpEndpointManager: HttpEndpointManager;

    beforeEach(() => {
        httpEndpointManager = new HttpEndpointManager();
    });

    describe('can invoke operations based on requests', () => {

        it('with no parameters', async () => {
            // given
            let httpRequest: HttpRequest = HttpRequestBuilder.of('GET', '/test').build();
            class TestClass {
                @GET @Path('/test')
                async operation(): Promise<string> { return 'test'; }
            }
            httpEndpointManager.registerEndpoints(new TestClass());
            // when
            let httpResponse: HttpResponse = await httpEndpointManager.handleRequest(httpRequest);
            // then
            expect(httpResponse).not.toBeUndefined();
            expect(httpResponse.getStatusCode()).toBe(HttpStatuses.OK);
            expect(httpResponse.getPayload()).toBe('test');
        });

    });

    describe('returns correct HTTP responses when no matching operation is found', () => {

        it('404 when no operation is found', async () => {
            // given
            let httpRequest: HttpRequest = HttpRequestBuilder.of('POST', '/').build();
            // when
            let httpResponse: HttpResponse = await httpEndpointManager.handleRequest(httpRequest);
            // then
            expect(httpResponse).not.toBeUndefined();
            expect(httpResponse.getStatusCode()).toBe(HttpStatuses.NOT_FOUND);
        });

        it('405 when the method is not supported', async () => {
            // given
            class TestClass {
                @GET @Path('/')
                async operation(): Promise<string> { return 'test'; }
            }
            let httpRequest: HttpRequest = HttpRequestBuilder.of('POST', '/').build();
            httpEndpointManager.registerEndpoints(new TestClass());
            // when
            let httpResponse: HttpResponse = await httpEndpointManager.handleRequest(httpRequest);
            // then
            expect(httpResponse).not.toBeUndefined();
            expect(httpResponse.getStatusCode()).toBe(HttpStatuses.METHOD_NOT_ALLOWED);
        });

        it('406 when the accepted media type is not supported', async () => {
            // given
            class TestClass {
                @GET @Path('/')
                @Produces('text/plain')
                async operation(): Promise<string> { return 'test'; }
            }
            let httpRequest: HttpRequest = HttpRequestBuilder.of('GET', '/')
                .withHeader(new HttpHeader(HttpHeaders.ACCEPT, 'application/json'))
                .build()
            ;
            httpEndpointManager.registerEndpoints(new TestClass());
            // when
            let httpResponse: HttpResponse = await httpEndpointManager.handleRequest(httpRequest);
            // then
            expect(httpResponse).not.toBeUndefined();
            expect(httpResponse.getStatusCode()).toBe(HttpStatuses.NOT_ACCEPTABLE);
        });

        it('415 when the content media typoe is not supported', async () => {
            // given
            class TestClass {
                @POST @Path('/')
                @Consumes('text/plain')
                async operation(value: string): Promise<void> { /* empty */ }
            }
            let httpRequest: HttpRequest = HttpRequestBuilder.of('POST', '/')
                .withHeader(new HttpHeader(HttpHeaders.CONTENT_TYPE, 'application/json'))
                .build()
            ;
            httpEndpointManager.registerEndpoints(new TestClass());
            // when
            let httpResponse: HttpResponse = await httpEndpointManager.handleRequest(httpRequest);
            // then
            expect(httpResponse).not.toBeUndefined();
            expect(httpResponse.getStatusCode()).toBe(HttpStatuses.UNSUPPORTED_MEDIA_TYPE);
        });

    });

});