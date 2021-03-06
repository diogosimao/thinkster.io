angular.module('myApp', [])
.service('notesService', function () {
    var data = [
        {id:1, title:'Note 1'},
        {id:2, title:'Note 2'},
        {id:3, title:'Note 3'},
        {id:4, title:'Note 4'},
        {id:5, title:'Note 5'},
        {id:6, title:'Note 6'},
        {id:7, title:'Note 7'},
        {id:8, title:'Note 8'}
    ];

    return {
        notes:function () {
            return data;
        },
        addNote:function (noteTitle) {
            var currentIndex = data.length + 1;
            data.push({
                id:currentIndex, title:noteTitle
            });
        },
        deleteNote:function (id) {
            var oldNotes = data;
            data = [];

            angular.forEach(oldNotes, function (note) {
                if (note.id !== id) data.push(note);
            });
        }
    };
})
.directive('myNotebook', function () {
    return {
        restrict:"E",
        scope:{
            notes:'=',
            ondelete:'&'
        },
        templateUrl:"./partials/notebook-directive.html",
        controller:function ($scope, $attrs) {
            $scope.deleteNote = function (id) {
                $scope.ondelete({id:id});
            }
        }
    };
})
.directive('myNota', function () {
    return {
        restrict:'E',
        scope:{
            delete:'&',
            note:'='
        },
        link:function (scope, element, attrs) {
            var $el = $(element);

            $el.hide().fadeIn('slow');

            $('.thumbnails').sortable({
                placeholder:"ui-state-highlight", forcePlaceholderSize:true
            });
        }
    };
})
.controller('NotebookCtrl', ['$scope', 'notesService', function ($scope, notesService) {
    $scope.getNotes = function () {
        return notesService.notes();
    };

    $scope.addNote = function (noteTitle) {
        if(noteTitle != '') {
            notesService.addNote(noteTitle);
        }
    };

    $scope.deleteNote = function (id) {
        notesService.deleteNote(id);
    };
    
    $scope.resetForm = function() {
        $scope.noteTitle = '';            
    };
}]);