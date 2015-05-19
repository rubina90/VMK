(function(){
    var module = angular.module("vmk");

    var groups = [
        {
            title: '1. Praca nad emisja wg szkoły bel canto...',
            content: "Stopniowa, indywidualna praca nad emisją głosu według zasad szkoły bel canto, przy użyciu ćwiczeń wokalnych napisanych przez E. H. Caesari'ego – wybitnego pedagoga śpiewu. Celem jest wypracowanie skali uczestników od dwóch do trzech oktaw (zależnie od indywidualnych predyspozycji), co jest skalą w pełni odpowiadającą wymaganiom repertuaru każdego gatunku muzyki (także klasyki)."
        },
        {
            title: "2. Kształtowanie samogłosek i spólgłosek...",
            content: "Świadome kształtowanie samogłosek i spółgłosek w rejestrach głosu, co zapewnia przejrzystą i poprawną dykcję."
        },
        {
            title: "3. Praca nad umiejętnościami kontroli...",
            content: "Wykształcenie umiejętności kontroli nad mechanizmem wokalnym poprzez odpowiedni trening umysłu."
        },
        {
            title: "4. Zadania aktorskie w interpretacji tekstów...",
            content: "Zdobycie podstawowej wiedzy z zakresu zadań aktorskich i wypracowanie metod ich wykorzystania w interpretacji tekstów piosenek."
        },
        {
            title: "5. Poznanie wielu gatunków muzyki rozrywkowej...",
            content: "Nauka utworów o różnej stylistyce (jazz, pop, soul, blues, rock, funk, r&b) ze wskazaniem na charakterystyczne elementy stanowiące o danej stylistyce, co daje umiejętność poruszania się w sposób profesjonalny w wielu gatunkach muzyki rozrywkowej."
        },
        {
            title: "6. Analiza wykonań wokalnych...",
            content: "Audycje muzyczne, mające na celu zapoznanie uczestnika z uznanymi wykonaniami wokalnymi w różnych gatunkach muzycznych oraz rozwijanie umiejętności świadomego słuchania muzyki i profesjonalnego jej opiniowania - wspólne analizowanie nagrań wybranych wykonawców."
        },
        {
            title: "7. Dobór repertuaru polskiego i zagranicznego...",
            content: "Ćwiczenie z profesjonalnymi podkładami muzycznymi do utworów polskich i zagranicznych - praca nad repertuarem ( przygotowywanie, analiza i rozplanowanie ćwiczeń)."
        },
        {
            title: "8. Zapoznanie się z teorią muzyki rozrywkowej...",
            content: "Wiedza z teorii muzyki jazzowej oraz rozrywkowej i jej wykorzystanie w praktyce."
        },
        {
            title: "9. Zapoznanie się z charakterystyką pracy estradowej i studyjnej...",
            content: "Informacje z zakresu pracy estradowej i studyjnej wokalisty (praca z mikrofonem, wiedza o sprzęcie muzycznym, programach muzycznych, konfiguracja i obsługa domowego studia nagrań)."
        },
        {
            title: "10. Zapoznanie się z zasadami kompozycji i aranżacji...",
            content: "Dla wokalistów piszących własną muzykę i teksty, przewidziane są konsultacje dotyczące kompozycji i aranżacji."
        }
    ];

    var classesProgramController = function($scope){
        $scope.groups = groups;
    };

    module.controller("ClassesProgramController", classesProgramController);
}());