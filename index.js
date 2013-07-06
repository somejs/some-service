/**
 * Фабрика сервисов
 *
 * @name $
 */
var $= module.exports= function $(service) {

    return Proxy.createFunction({
        getOwnPropertyDescriptor: function(name) {
            return Object.getOwnPropertyDescriptor(service)
        },
        getOwnPropertyNames: function() {
            return Object.getOwnPropertyNames(service)
        },
        getPropertyDescriptor: function(name) {
            return Object.getPropertyDescriptor(service)
        },
        getPropertyNames: function() {
            return Object.getPropertyNames(service)
        },
        defineProperty: function(name, descriptor) {
            return Object.defineProperty(service, name, descriptor)
        },
        get: function (proxy, k) {
            return service[k]
        }
    }
    ,   function (name, properties) {
            return $(
                service.define(name, properties)
            )
    }
    ,   function (data) {
            return service.create(data)
    })
}
