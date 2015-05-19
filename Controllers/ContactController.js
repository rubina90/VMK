(function(){
    var module = angular.module("vmk");

    var contactController = function($scope, $http){
        //Consts for footer
        $scope.address = "Pałac Staszica ul. Nowy Świat 72, Krakowskie Przedmieście, Warszawa";
        $scope.telephone = "+48 691 311 991";
        $scope.emailAddress = "kontakt@vocalmasterkey.pl";
        $scope.firstName = "Marta";
        $scope.lastName = "Przeniosło";
        $scope.companyName = "Vocal Master Key";
        $scope.title = "Kontakt";
        //Consts for footer


        $scope.result = 'hidden';
        $scope.resultMessage;
        $scope.formData; //formData is an object holding the name, email, subject, and message
        $scope.submitButtonDisabled = false;
        $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
        $scope.submit = function(contactform) {
            $scope.submitted = true;
            $scope.submitButtonDisabled = true;
            $http({
                method  : 'POST',
                url     : '../ServerSideScripts/contact-form.php',
                data    : "inputName="+$scope.formData.inputName+"&inputEmail="+$scope.formData.inputEmail+"&inputSubject="+$scope.formData.inputSubject+"&inputMessage="+$scope.formData.inputMessage,
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        }
    };

    module.controller("ContactController", contactController);
}());