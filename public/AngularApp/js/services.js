/**
 * Created by Sandeep on 01/06/14.
 */

angular
    .module('restApp.services', [])
    .factory('Article', function ($resource) {
        return $resource('http://localhost:3000/Articles/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    })
    .factory('Task', function ($resource) {
        return $resource('http://localhost:3000/Tasks/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    })
    .service('popupService', function ($window) {
        this.showPopup = function (message) {
            return $window.confirm(message);
        }
    });