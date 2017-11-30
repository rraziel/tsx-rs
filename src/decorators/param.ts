import {PropertyOrParameterDecorator, throwInvalidDecoratorUsage} from './helper';
import {OperationInfoBuilder, OperationParameterType, ResourceInfoBuilder} from '../metadata';

import 'reflect-metadata';

const METADATAKEY_PARAMETERTYPES: string = 'design:paramtypes';
const METADATAKEY_TYPE: string = 'design:type';

/**
 * Get a method parameter class
 * @param target         Target
 * @param propertyKey    Property key
 * @param parameterIndex Parameter index
 * @return Parameter class
 */
function getMethodParameterClass(target: Object, propertyKey: string|symbol, parameterIndex: number): Function {
    let parameterClasses: Function[] = Reflect.getMetadata(METADATAKEY_PARAMETERTYPES, target, propertyKey);
    return parameterClasses[parameterIndex];
}

/**
 * Get a resource property class
 * @param target      Target
 * @param propertyKey Property key
 * @return Property class
 */
function getResourcePropertyClass(target: Object, propertyKey: string|symbol): Function {
    let propertyClass: Function = Reflect.getMetadata(METADATAKEY_TYPE, target, propertyKey);
    return propertyClass;
}

/**
 * Create a parameter decorator
 * @param decoratorName Decorator name
 * @param parameterType Parameter type
 * @param parameterName Parameter name
 */
function createParameterDecorator(decoratorName: string, parameterType: OperationParameterType, parameterName?: string): PropertyOrParameterDecorator {
    return (target, propertyKey, parameterIndex) => {
        if (target instanceof Function) {
            throwInvalidDecoratorUsage(target, propertyKey, 'the @' + decoratorName + ' decorator cannot be used on a static method or property');
        }

        if (parameterIndex !== undefined) {
            let parameterClass: Function = getMethodParameterClass(target, propertyKey, parameterIndex);
            OperationInfoBuilder.of(target, propertyKey).parameter(parameterIndex, parameterType, parameterClass, parameterName);
        } else {
            let propertyClass: Function = getResourcePropertyClass(target, propertyKey);
            ResourceInfoBuilder.of(target).property(propertyKey, parameterType, propertyClass, parameterName);
        }
    };
}

/**
 * Create a FormParam decorator, declaring the path parameter bound to a method parameter or to a class property
 * @param parameterName Parameter name
 * @return FormParam decorator
 */
function FormParam(parameterName?: string): PropertyOrParameterDecorator {
    return createParameterDecorator('FormParam', OperationParameterType.FORM, parameterName);
}

/**
 * Create a HeaderParam decorator, declaring the header parameter bound to a method parameter or to a class property
 * @param parameterName Parameter name
 * @return HeaderParam decorator
 */
function HeaderParam(parameterName?: string): PropertyOrParameterDecorator {
    return createParameterDecorator('HeaderParam', OperationParameterType.HEADER, parameterName);
}

/**
 * Create a PathParam decorator, declaring the path parameter bound to a method parameter or to a class property
 * @param parameterName Parameter name
 * @return PathParam decorator
 */
function PathParam(parameterName: string): PropertyOrParameterDecorator {
    return createParameterDecorator('PathParam', OperationParameterType.PATH, parameterName);
}

/**
 * Create a QueryParam decorator, declaring the path parameter bound to a method parameter or to a class property
 * @param parameterName Parameter name
 * @return QueryParam decorator
 */
function QueryParam(parameterName?: string): PropertyOrParameterDecorator {
    return createParameterDecorator('QueryParam', OperationParameterType.QUERY, parameterName);
}

export {
    FormParam,
    HeaderParam,
    PathParam,
    QueryParam
};
