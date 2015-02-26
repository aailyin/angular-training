'use strict';

angular
.module('personLibraryApp', [])
.controller('PersonGridController', function ($scope){
    $scope.persons = [
        {
            "firstName": "John",
            "lastName": "Smith",
            "age": 25,
            "address":
            {
                "streetAddress": "21 2nd Street",
                "city": "New York",
                "state": "NY",
                "postalCode": "10021"
            },
            "phoneNumber":
            [
                {
                    "type": "home",
                    "number": "212 555-1234"
                },
                {
                    "type": "fax",
                    "number": "646 555-4567"
                }
            ]
        },
        {
            "firstName": "Simona",
            "lastName": "Morasca",
            "age": 22,
            "address":
            {
                "streetAddress": "3 Mcauley Dr",
                "city": "Ashland",
                "state": "OH",
                "postalCode": "44805"
            },
            "phoneNumber":
            [
                {
                    "type": "home",
                    "number": "419-503-2484"
                },
                {
                    "type": "fax",
                    "number": "419-800-6759"
                }
            ]
        },
        {
            "firstName": "Josephine",
            "lastName": "Darakjy",
            "age": 33,
            "address":
            {
                "streetAddress": "4 B Blue Ridge Blvd",
                "city": "Brighton",
                "state": "MI",
                "postalCode": "48116"
            },
            "phoneNumber":
            [
                {
                    "type": "home",
                    "number": "973-605-6492"
                },
                {
                    "type": "fax",
                    "number": "602-919-4211"
                }
            ]
        }
    ];

    $scope.query = '';
    $scope.phoneType = 'home';
    $scope.predicate = '';
    $scope.reverse = false;
    $scope.showButton = {
        'text': 'Show Lesson Content',
        'btnClass': 'btn-default',
        'isShow': false
    };

    $scope.changeBtn = function () {
        if($scope.showButton.isShow){
            $scope.showButton.btnClass = 'btn-default';
            $scope.showButton.text = 'Show Lesson Content';
            $scope.showButton.isShow = false;
        } else {
            $scope.showButton.btnClass = 'btn-primary';
            $scope.showButton.text = 'Hide Lesson Content';
            $scope.showButton.isShow = true;
        }
        $scope.predicate = '';
    };
});