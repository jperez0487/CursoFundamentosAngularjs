'use strict'

eventsApp.controller('EventController',
    function EventController($scope){
        $scope.snippet = '<span style="color:red;">Holasss</span>';
        $scope.boolValue = true;
        $scope.myStyle = {color : 'yellow'};
        $scope.myClass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortorder = 'name';
        $scope.event = {
            name : 'Monterrey - Mi Barrio',
            date : '1/5/2020',
            time : '10:30 pm' ,
            location : {
                address : 'Google Donja',
                city : 'Monterrey',
                province : 'Ate'
            },
            imageUrl : '/img/angularjs-logo.png',
            sessions : [
                {
                    name : 'Kenyo Perez introductory',
                    creatorName : 'Pedrito Gonzales',
                    duration : 1,
                    level : 'Advanced',
                    abstract : 'Dark Dark Dark Full House Fuller House Chivi mi barri0 monterrico es el mejor jajaja ya sabes muchachos, asi que cualquier campeonato estamos ahi mismo por tal motivo cuando el barco se hundio nunca hubieron almunos del colegio santa isabel para poder levantar tremendo desastre',
                    upVoteCount : 0
                },
                {
                    name : 'Juan Ramirez ',
                    creatorName : 'Goku de la piedra',
                    duration : 2,
                    level : 'Introductory',
                    abstract : 'Dark Dark Dark Full House Fuller House Chivi mi barri0 monterrico es el mejor jajaja ya sabes muchachos, asi que cualquier campeonato estamos ahi mismo por tal motivo cuando el barco se hundio nunca hubieron almunos del colegio santa isabel para poder levantar tremendo desastre',
                    upVoteCount : 0
                },
                {
                    name : 'Milagros Leiva ',
                    creatorName : 'Kamizama Ramirez',
                    duration : 4,
                    level : 'Intermediate',
                    abstract : 'Dark Dark Dark Full House Fuller House Chivi mi barri0 monterrico es el mejor jajaja ya sabes muchachos, asi que cualquier campeonato estamos ahi mismo por tal motivo cuando el barco se hundio nunca hubieron almunos del colegio santa isabel para poder levantar tremendo desastre',
                    upVoteCount : 0
                }
            ]
        }

        $scope.upVoteSession = function(session){
            session.upVoteCount ++;
        }

        $scope.downVoteSession = function(session){
            session.upVoteCount --;
        }

    }
);