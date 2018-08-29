import { HttpHeader } from './HttpHeader';

/**
 * Abstract HTTP message
 */
abstract class AbstractHttpMessage {
    private readonly headers: Array<HttpHeader>;
    private readonly payload: string|undefined;

    /**
     * Class constructor
     * @param headers List of HTTP headers
     * @param payload Payload
     */
    constructor(headers?: Array<HttpHeader>, payload?: string) {
        this.headers = headers || [];
        this.payload = payload;
    }

    /**
     * Get all HTTP headers
     * @return HTTP headers
     */
    getHeaders(): Array<HttpHeader> {
        return this.headers;
    }

    /**
     * Get an HTTP header
     * @param headerName Header name
     * @return HTTP header
     */
    getHeader(headerName: string): HttpHeader|undefined {
        return this.headers.find(httpHeader => httpHeader.getName().toLowerCase() === headerName.toLowerCase());
    }

    /**
     * Get an HTTP header value
     * @param headerName Header name
     * @return Header value
     */
    getHeaderValue(headerName: string): string|undefined {
        let httpHeader: HttpHeader|undefined = this.getHeader(headerName);
        return httpHeader && httpHeader.getValue();
    }

    /**
     * Test whether a payload is present
     * @return true if a payload is present
     */
    hasPayload(): boolean {
        return this.payload !== undefined;
    }

    /**
     * Get the payload
     * @return Payload
     */
    getPayload(): string|undefined {
        return this.payload;
    }

}

export {
    AbstractHttpMessage
};
