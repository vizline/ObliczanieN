Object.assign(ANALYSES.korelacja,{
  figure:'assets/figures/rysunek-5-korelacja.png',figureCaption:'Rysunek 5. G*Power — analiza a priori dla korelacji Pearsona (ρ = 0,20, moc = 0,90): wymagane N = 258.',
  full:[
    {h:'Typowy schemat badania',p:'Jednorazowy pomiar kilku zmiennych kwestionariuszowych i analiza korelacji między nimi. Analizę mocy wykonuj dla każdej głównej pary zmiennych osobno, jeżeli zakładane efekty lub poziomy α są różne.'},
    {h:'Test jedno- czy dwustronny?',p:'W typowej analizie wybierz Two. One stosuj wyłącznie wtedy, gdy przed zebraniem danych masz mocne uzasadnienie testowania tylko jednego kierunku, a efekt w kierunku przeciwnym nie byłby uznany za potwierdzenie hipotezy.'},
    {h:'Jak rozumieć ρ H1 i ρ H0?',p:'ρ H1 to korelacja populacyjna, dla której zapewniasz moc. Powinna wynikać z literatury albo SESOI. ρ H0 to korelacja zakładana przez hipotezę zerową; przy pytaniu, czy związek różni się od zera, wpisz 0.'},
    {h:'Odpowiednik w SPSS',p:'Analiza → Moc testów → Korelacje → Pearsona, a następnie Estymacja: Rozmiar próby.'}
  ]
});
Object.assign(ANALYSES['test-t-niezalezny'],{
  figure:'assets/figures/rysunek-6-test-t-niezalezny.png',figureCaption:'Rysunek 6. G*Power — test t dla prób niezależnych (d = 0,50, moc = 0,80): N = 2 × 64 = 128.',
  full:[
    {h:'Co jest testowane?',p:'Różnica średnich w dwóch odrębnych grupach, np. eksperymentalnej i kontrolnej. d Cohena opisuje różnicę średnich w jednostkach wspólnego odchylenia standardowego.'},
    {h:'Równoliczność grup',p:'Allocation ratio N2/N1 = 1 oznacza grupy równoliczne. Jeżeli rekrutacja do jednej grupy jest trudniejsza, wpisz realistyczną proporcję. Nierównowaga zwykle wymaga większej liczebności całkowitej dla tej samej mocy.'},
    {h:'Mały efekt może wymagać dużej próby',p:'Dla d = 0,20 i mocy 0,80 potrzeba po 394 osoby w grupie. To ważna przeciwwaga dla automatycznych reguł typu „30 osób na grupę”.'},
    {h:'Zapas rekrutacyjny',p:'Wynik G*Power jest liczbą kompletnych obserwacji. Jeżeli przewidujesz rezygnacje lub wykluczenia, zwiększ osobno plan rekrutacji każdej grupy zgodnie z N/(1−utrata).'}
  ]
});
Object.assign(ANALYSES['test-t-zalezny'],{
  figure:'assets/figures/rysunek-7-test-t-zalezny.png',figureCaption:'Rysunek 7. G*Power — wyznaczanie dᶻ z parametrów dwóch powiązanych pomiarów.',
  full:[
    {h:'Definicja efektu',p:'dᶻ = M różnic / SD różnic. Wielkość ta zależy od korelacji między pomiarami: przy tej samej różnicy średnich silniejsza korelacja zwykle zmniejsza SD różnic i zwiększa dᶻ.'},
    {h:'Jak wyznaczyć dᶻ?',p:'Najlepiej użyć bezpośrednio średniej i odchylenia standardowego wyników różnicowych z podobnego badania. Gdy masz średnie i SD obu pomiarów oraz ich korelację, wybierz Determine → From group parameters.'},
    {h:'Interpretacja wymaganego N',p:'N = 52 oznacza 52 osoby z kompletem obu pomiarów, nie 52 obserwacje łącznie. Przy badaniu podłużnym dolicz zapas na utratę uczestników między falami.'},
    {h:'Dwa pomiary a ANOVA',p:'Przy dokładnie dwóch pomiarach test t dla prób zależnych jest prostym rozwiązaniem. Dla trzech lub większej liczby pomiarów przejdź do ANOVA z powtarzanym pomiarem.'}
  ]
});
Object.assign(ANALYSES['anova-jednoczynnikowa'],{
  figure:'assets/figures/rysunek-8-anova.png',figureCaption:'Rysunek 8. G*Power — wyznaczanie f na podstawie η² za pomocą funkcji Determine.',
  full:[
    {h:'Wielkość efektu f',p:'f opisuje zróżnicowanie średnich grup względem zmienności wewnątrz grup. Gdy źródło podaje η², zastosuj f = √(η²/(1−η²)). Dla η² = 0,06 otrzymujesz f ≈ 0,2526.'},
    {h:'Nie zaokrąglaj zbyt wcześnie',p:'Dla f = 0,2526456 wynik może wynieść N = 156, a dla zaokrąglonego f = 0,25 — N = 159. Zachowuj możliwie pełną precyzję obliczeń pośrednich.'},
    {h:'Omnibus i porównania szczegółowe',p:'Test omnibus odpowiada na pytanie, czy jakiekolwiek średnie się różnią. Jeśli hipoteza dotyczy konkretnej pary, policz moc dla tego porównania, np. jak dla testu t, z uwzględnieniem korekty wielokrotnego testowania.'},
    {h:'SPSS i bardziej złożone ANOVA',p:'SPSS: Analiza → Moc testów → Średnie. Dla ANOVA wieloczynnikowej i z powtarzanymi pomiarami użyj G*Power lub symulacji odpowiadającej planowanemu modelowi.'}
  ]
});
Object.assign(ANALYSES['anova-powtarzane'],{
  figure:'assets/figures/rysunek-9-anova-powtarzane.png',figureCaption:'Rysunek 9. G*Power — ANOVA z powtarzanym pomiarem, opcja „as in SPSS”, partial η² = 0,05.',
  full:[
    {h:'Wybierz właściwy efekt',p:'Within factors bada zmianę między pomiarami. Within–between interaction bada, czy przebieg zmiany różni się między grupami. Between factors bada różnicę grup uśrednioną po pomiarach. W badaniu interwencji główną hipotezą jest często interakcja grupa × czas, nie sam efekt czasu.'},
    {h:'Corr among rep measures',p:'To zakładana korelacja wyników tych samych osób w kolejnych pomiarach. Nie wpisuj 0,50 tylko dlatego, że jest domyślne. Dla dwóch pomiarów użyj korelacji z podobnego badania; dla wielu pomiarów wartości reprezentatywnej lub kilku scenariuszy.'},
    {h:'Nonsphericity correction ε',p:'Sferyczność oznacza podobne wariancje różnic między parami pomiarów. Dla dwóch pomiarów ε = 1. Przy ≥3 pomiarach niższe ε oznacza silniejsze naruszenie sferyczności i zwykle większe N. Jeśli nie masz danych, policz warianty, np. 1,00 i 0,70.'},
    {h:'Cztery definicje efektu w Options',p:'Dla partial η² z wcześniejszego badania wybierz „as in SPSS” i Determine. Dla efektu Cohena definiowanego niezależnie od korelacji — „as in Cohen (1988) — recommended”. Nie używaj historycznych opcji „as in GPower 3.0”.'},
    {h:'Dlaczego wynik może się mocno zmienić?',p:'Ta sama wartość f nie znaczy tego samego w każdej opcji. Sposób definicji efektu, korelacja pomiarów i ε wpływają na parametr niecentralności, a więc na moc i wymagane N.'}
  ]
});
Object.assign(ANALYSES['regresja-wielozmiennowa'],{
  figure:'assets/figures/rysunek-10-regresja.png',figureCaption:'Rysunek 10. G*Power — test całego modelu regresji (f² = 0,15; pięć predyktorów; moc = 0,80): N = 92.',
  full:[
    {h:'Pytanie testu całego modelu',p:'Czy zestaw predyktorów jako całość przewiduje Y lepiej niż model bez predyktorów, czyli czy populacyjne R² jest większe od zera.'},
    {h:'Przeliczenie R² na f²',p:'Użyj f² = R²/(1−R²). Dla R² = 0,13: f² = 0,13/0,87 ≈ 0,149. Wartość R² musi pochodzić z modelu o porównywalnym zestawie predyktorów i podobnej populacji.'},
    {h:'Liczba predyktorów',p:'Podaj wszystkie zmienne objaśniające obecne w modelu. Wyrazu wolnego nie wliczaj.'},
    {h:'Granica tej analizy',p:'Test całego modelu nie zapewnia mocy dla unikalnego wkładu neurotyczności ani innego pojedynczego predyktora. Dla takiej hipotezy użyj testu przyrostu R².'}
  ]
});
Object.assign(ANALYSES['regresja-hierarchiczna'],{
  figure:'assets/figures/rysunek-11-regresja-hierarchiczna.png',figureCaption:'Rysunek 11. G*Power — przyrost R² w regresji hierarchicznej. Na rycinie f² zaokrąglono do 0,06, stąd N = 164.',
  full:[
    {h:'Logika bloków',p:'Predyktory wprowadzaj w zaplanowanej kolejności wynikającej z teorii. ΔR² opisuje dodatkowy wkład testowanego bloku po kontrolowaniu zmiennych umieszczonych wcześniej.'},
    {h:'Wzór na efekt',p:'f² = ΔR²/(1−R² pełnego modelu). Równoważnie licznik to R² pełnego modelu minus R² modelu bez testowanego bloku. Mianownik zawsze odnosi się do pełnego modelu.'},
    {h:'Dwa pola predyktorów',p:'Number of tested predictors to liczba zmiennych w dodawanym bloku. Total number of predictors to wszystkie predyktory pełnego modelu. Dla trzech kontroli i dwóch nowych: tested = 2, total = 5.'},
    {h:'Precyzja',p:'Dla ΔR² = 0,05 i R² pełnego = 0,20 otrzymujesz f² = 0,0625 oraz N = 158 przy mocy 0,80. Zaokrąglenie do 0,06 daje N = 164.'}
  ]
});
Object.assign(ANALYSES.moderacja,{
  full:[
    {h:'Moderator dychotomiczny',p:'Model zawiera X, W oraz X×W. Interakcja sprawdza, czy nachylenie regresji X→Y różni się między dwiema kategoriami W. W G*Power: tested = 1, total = 3; kontrole zwiększają total.'},
    {h:'Moderator ciągły',p:'Podstawowy zapis modelu jest taki sam, ale moc zależy także od rzetelności pomiaru, korelacji X z W, rozkładów i zakresu wartości. Gdy moderacja jest główną hipotezą, rozważ InteractionPoweR lub symulację Monte Carlo.'},
    {h:'Moderator wielokategorialny',p:'Dla k kategorii potrzeba k−1 zmiennych wskaźnikowych i k−1 interakcji. Przy trzech kategoriach model ma X, W₁, W₂, X×W₁ i X×W₂: tested = 2, total = 5. Testuj łączny wkład obu interakcji.'},
    {h:'Realistyczna skala efektów',p:'Interakcje są często bardzo małe. W przeglądzie moderacji kategorialnych mediana wynosiła około f² = 0,002, dużo poniżej Cohenowskiego 0,02. Nie jest to uniwersalna wartość, ale ostrzeżenie przed optymizmem.'},
    {h:'Decyzja projektowa',p:'Jeśli realistyczne N jest nieosiągalne, ogranicz ambicje albo oznacz moderację jako eksploracyjną przed analizą. Nie zwiększaj sztucznie zakładanego f².'}
  ]
});
Object.assign(ANALYSES.mediacja,{
  figure:'assets/figures/rysunek-12-mediacja-monte-carlo.png',figureCaption:'Rysunek 12. Monte Carlo Power Analysis for Indirect Effects — ustawienia prostej mediacji.',
  full:[
    {h:'Model i wnioskowanie',p:'Prosty model obejmuje ścieżkę a (X→M), ścieżkę b (M→Y przy X) i efekt bezpośredni c′. Efekt pośredni to a×b. Ponieważ rozkład iloczynu jest asymetryczny, wnioskuj na podstawie bootstrapowego lub Monte Carlo przedziału ufności.'},
    {h:'Ograniczenie danych poprzecznych',p:'Istotny efekt pośredni w jednoczesnym pomiarze X, M i Y nie dowodzi mechanizmu przyczynowego. Potrzebny jest odpowiedni porządek czasowy i kontrola potencjalnych zmiennych zakłócających.'},
    {h:'Szybka droga: Fritz i MacKinnon',p:'Tabela podaje orientacyjne N dla mocy 0,80 przy percentylowym bootstrapie. S = 0,14, H = 0,26, M = 0,39, L = 0,59. Gdy jedna ścieżka jest mała, N gwałtownie rośnie. Wyniki są dolną granicą, bo symulowano pomiar bez błędu.'},
    {h:'Elastyczna droga: Monte Carlo',p:'Wybierz One Mediator → Set Power, Vary N. Wprowadź współczynniki standaryzowane a, b i c′ z tego samego modelu lub bezpośrednio korelacje. Dla współczynników standaryzowanych pozostaw SD X, M i Y = 1.'},
    {h:'Ustawienia symulacji',p:'# of Replications to liczba sztucznych badań. Monte Carlo Draws per Rep to losowania wewnątrz każdego badania do budowy CI. Ustaw poziom ufności, zwiększ replikacje w analizie końcowej i zapisz Random Seed.'},
    {h:'Doprecyzowanie N',p:'Najpierw przeszukaj szeroki zakres, np. 50–300. Gdy próg mocy leży między 70 a 80, ustaw Minimum N = 70, Maximum N = 80 i Sample Size Steps = 1. Wyniki mogą nieznacznie różnić się między uruchomieniami.'},
    {h:'Alternatywa MedPower',p:'MedPower używa testu łącznej istotności a i b. Jeżeli planujesz bootstrapowy CI w PROCESS, wybierz metodę mocy odpowiadającą bootstrapowi lub Monte Carlo, bo inna procedura wnioskowania może dać inne N.'}
  ]
});
Object.assign(ANALYSES.sem,{
  full:[
    {h:'Dwa odrębne cele',p:'Moc konkretnego parametru dotyczy np. ścieżki, ładunku lub efektu pośredniego. Moc globalnego dopasowania dotyczy zdolności wykrycia określonego niedopasowania modelu. Jedna nie zastępuje drugiej.'},
    {h:'Dlaczego nie ma jednego N?',p:'Wymagania zależą od wielkości ścieżek, jakości pomiaru zmiennych latentnych, ładunków, liczby wskaźników i pozostałych parametrów. Reguły „200 osób” lub „10 na parametr” ignorują te cechy.'},
    {h:'SEMLj i PAMLj',p:'SEMLj w jamovi pomaga zbudować i oszacować model. PAMLj uzupełnia je o analityczną lub symulacyjną moc dla parametrów, ale wymaga zapisu oczekiwanego modelu w składni zbliżonej do lavaan.'},
    {h:'pwrSEM',p:'Bezpłatna aplikacja do symulacyjnej mocy konkretnego parametru w modelu z konstruktami latentnymi. Symulacja uwzględnia właściwości całego planowanego modelu.'},
    {h:'semPower i power4SEM',p:'Stosuj przede wszystkim dla globalnego dopasowania, np. analizy opartej na RMSEA. semPower ma szersze możliwości; power4SEM jest prostszym kalkulatorem testów χ² i RMSEA.'},
    {h:'Zasada decyzyjna',p:'Najpierw wskaż najważniejszą hipotezę. Dla ścieżki planuj moc ścieżki; dla dopasowania — moc testu dopasowania. Jeśli oba cele są kluczowe, policz oba i przyjmij bardziej wymagające N.'}
  ]
});
