app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = ' An Angular Book Store App';
    $scope.promo = 'Buy and rate your books here';
    $scope.products =
   [
 {
     name: 'The Book of Trees',
     price: 19,
     pubdate: new Date('2014', '03', '08'),
     cover: 'img/the-book-of-trees.jpg',
     likes: 0,
     dislikes: 0,

 },
 {
     name: 'Program or be Programmed',
     price: 8,
     pubdate: new Date('2013', '08', '01'),
     cover: 'img/program-or-be-programmed.jpg',
     likes: 0,
     dislikes: 0,
 },
    {
        name: 'Think and Grow Rich',
        price: 20,
        pubdate: new Date('2006', '08', '01'),
        cover: 'img/think-and-grow-rich.jpg',
        likes: 0,
        dislikes: 0,
    },

    {
        name: 'The 7 Habits of Highly Effective People',
        price: 25,
        pubdate: new Date('2001', '09', '11'),
        cover: 'img/7-habits-of-highly-effective-people.jpg',
        likes: 0,
        dislikes: 0,
    }],

    $scope.minusOne =
     function (index) {
         $scope.products[index].dislikes -= 1;
     };


    $scope.plusOne =
    function (index) {
        $scope.products[index].likes += 1;
    };
}]);