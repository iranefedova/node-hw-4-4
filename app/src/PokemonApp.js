var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngResource']);

angular.
module('PokemonApp')

.config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider.
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).
        when('/berries', {
            templateUrl: 'src/BerriesList/BerriesList.html',
            controller: 'BerriesListCtrl'
        }).
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        when('/edit/:pokemonId', {
            templateUrl: 'src/EditPokemon/EditPokemon.html',
            controller: 'EditPokemonCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common = {
        "application-id": "BBE2BD1F-9306-F389-FFCE-0D7310E74300",
        "secret-key": "21A60E66-E921-977A-FF7D-AF3F75E3B400"
    };

}]);
