(function() {
    'use strict';

    angular.module('services')
        .factory('partnerService', partnerService);

    partnerService.$inject = ['$log', '$http', '$q', '$rootScope'];

    function partnerService($log, $http, $q, $rootScope) {
        return {
        	getAllPartner: getAllPartner,
            createPartner: createPartner,
            editPartnerInfo: editPartnerInfo,
            getAllPartnerContact : getAllPartnerContact,
            editPartnerContact : editPartnerContact,
            deletePartner : deletePartner
        };

        function deletePartner(partnerId){
            return $http({
                url:$rootScope.serverAdd + '/partner/' + partnerId + '/delete',
                method : 'DELETE'
            })
        }

        function getAllPartnerContact(partnerId){
            return $http({
                url:$rootScope.serverAdd + '/partner/' + partnerId + '/contact',
                method : 'GET'
            })
        }

        function getAllPartner(){
            return $http({
                url:$rootScope.serverAdd + '/partner',
                method : 'GET'
            })
        }

        function createPartner(data){
            return $http({
                url:$rootScope.serverAdd + '/partner/create',
                method : 'POST',
                data : data
            })
        }

        function editPartnerInfo(data){
            return $http({
                url:$rootScope.serverAdd + '/partner/edit',
                method : 'PUT',
                data : data
            })
        }

        function editPartnerContact(data){
            return $http({
                url:$rootScope.serverAdd + '/partner/contact/edit',
                method : 'PUT',
                data : data
            })
        }
    }
}());
