const ANALYSES = {
  korelacja: {
    no:'01', title:'Korelacja Pearsona', subtitle:'Dwie zmienne ciągłe mierzone jednorazowo', tag:'badanie poprzeczne',
    intro:'Użyj tej ścieżki, gdy główna hipoteza dotyczy liniowego związku dwóch zmiennych ciągłych, np. prężności psychicznej i wypalenia.',
    tool:['G*Power','Exact','Correlation: Bivariate normal model','A priori'],
    assumptions:[['Kierunek testu','Zwykle wybierz test dwustronny. Jednostronny jest uzasadniony tylko wtedy, gdy przeciwny kierunek nie byłby interpretowany i decyzję podjęto przed analizą.'],['Efekt ρ H1','Wpisz korelację w populacji, którą badanie ma wykrywać. Oprzyj ją na metaanalizie, podobnych badaniach lub SESOI.'],['Hipoteza zerowa ρ H0','Najczęściej 0, gdy pytasz, czy korelacja różni się od zera.'],['Wielokrotne testy','Jeżeli planujesz korektę poziomu istotności, użyj w analizie mocy już skorygowanego α.']],
    steps:['Sformułuj parę zmiennych i kierunek hipotezy.','Uzasadnij najmniejszą korelację wartą wykrycia.','W G*Power wybierz Exact → Correlation: Bivariate normal model → A priori.','Wprowadź Tail(s), ρ H1, α, moc i ρ H0.','Dodaj zapas na braki danych i zapisz wszystkie parametry.'],
    example:'Dla r = 0,20, testu dwustronnego, α = 0,05, mocy 0,90 i ρ H0 = 0 potrzeba N = 258. Przy r = 0,30 wystarczyłoby N = 112, ale gdy prawdziwe r wynosi 0,20, taka próba miałaby tylko około 57% mocy.',
    table:[['r','N · moc 0,80','N · moc 0,90'],['0,10','782','1046'],['0,20','193','258'],['0,30','84','112'],['0,40','46','61'],['0,50','29','37']],
    trap:'Nie wybieraj r = 0,30 wyłącznie dlatego, że Cohen nazwał je „średnim”. W badaniach nad różnicami indywidualnymi r ≈ 0,20 bywa wartością typową.',
    report:'Wymaganą liczebność próby oszacowano a priori w G*Power 3.1.9.7. Przyjęto r = 0,20 na podstawie [uzasadnienie]. Dla dwustronnego testu korelacji Pearsona, α = 0,05 i mocy 0,90 wymagana liczebność wyniosła N = 258.'
  },
  'test-t-niezalezny': {
    no:'02', title:'Test t dla prób niezależnych', subtitle:'Dwie odrębne grupy', tag:'porównanie średnich',
    intro:'Ta ścieżka służy porównaniu średnich dwóch niezależnych grup, np. eksperymentalnej i kontrolnej. Wielkością efektu jest d Cohena.',
    tool:['G*Power','t tests','Means: Difference between two independent means (two groups)','A priori'],
    assumptions:[['d Cohena','Standaryzowana różnica średnich. Uzasadnij ją dla podobnej populacji, interwencji i miary.'],['Stronność','W typowej sytuacji wybierz test dwustronny.'],['Proporcja grup','Allocation ratio N2/N1 = 1 oznacza grupy równoliczne. Nierówne grupy zwykle zwiększają łączne wymagane N.'],['N na grupę','Wynik G*Power rozdziel zgodnie z założoną proporcją; zapas na utratę danych licz dla każdej grupy.']],
    steps:['Określ dwie grupy i główne porównanie.','Uzasadnij d Cohena lub przelicz efekt z porównywalnego badania.','Wybierz t tests → Difference between two independent means.','Wprowadź d, α, moc, Tail(s) oraz Allocation ratio.','Zaplanuj rekrutację osobno dla obu grup.'],
    example:'Dla d = 0,50, α = 0,05, testu dwustronnego, mocy 0,80 i równolicznych grup potrzeba po 64 osoby, czyli N = 128.',
    table:[['d','n/grupę · moc 0,80','n/grupę · moc 0,90'],['0,20','394','527'],['0,50','64','86'],['0,80','26','34']],
    trap:'Nie zakładaj „30 osób na grupę”. Dla d = 0,20 potrzeba 394 osób w każdej grupie przy mocy 0,80.',
    report:'Analizę a priori wykonano w G*Power 3.1.9.7. Dla dwustronnego testu t dla prób niezależnych, d = 0,50, α = 0,05, mocy 0,80 oraz równolicznych grup wymagana liczebność wyniosła N = 128, po 64 osoby w grupie.'
  },
  'test-t-zalezny': {
    no:'03', title:'Test t dla prób zależnych', subtitle:'Dwa pomiary tych samych osób lub dobrane pary', tag:'porównanie średnich',
    intro:'Stosuj, gdy te same osoby są mierzone dwukrotnie, np. przed i po interwencji. Efektem jest dᶻ: średnia różnica podzielona przez odchylenie standardowe różnic.',
    tool:['G*Power','t tests','Means: Difference between two dependent means (matched pairs)','A priori'],
    assumptions:[['Właściwa miara','dᶻ nie jest tym samym co d z porównania niezależnych grup.'],['Korelacja pomiarów','Wpływa na zmienność różnic i potrzebne N. Najlepiej zaczerpnąć ją z podobnego badania.'],['Kompletne pary','Wymagane N dotyczy osób z kompletem obu pomiarów. Zapas powinien uwzględniać utratę w follow-up.'],['Determine','G*Power może wyliczyć dᶻ ze średnich, odchyleń standardowych i korelacji pomiarów.']],
    steps:['Potwierdź, że obserwacje tworzą pary.','Zdobądź średnią i SD różnic albo oba zestawy średnich, SD i ich korelację.','Wyznacz dᶻ przyciskiem Determine, jeśli potrzeba.','Wybierz dependent means (matched pairs) i wprowadź dᶻ, α, moc oraz stronność.','Powiększ N o spodziewaną utratę drugiego pomiaru.'],
    example:'M₁ = 54, M₂ = 50, SD₁ = SD₂ = 10 i korelacja r = 0,50 dają dᶻ = 0,40. Dla α = 0,05, testu dwustronnego i mocy 0,80 potrzeba 52 osób z kompletem danych.',
    trap:'Nie wpisuj automatycznie d Cohena z wcześniejszego badania dwóch niezależnych grup. Powiązanie pomiarów zasadniczo zmienia wielkość efektu.',
    report:'Dla testu t dla prób zależnych przyjęto dᶻ = 0,40, wyznaczone na podstawie [średnich, SD i korelacji]. Przy α = 0,05, teście dwustronnym i mocy 0,80 wymagane było N = 52 kompletnych par pomiarów.'
  },
  'anova-jednoczynnikowa': {
    no:'04', title:'Jednoczynnikowa ANOVA', subtitle:'Trzy lub więcej niezależnych grup', tag:'porównanie średnich',
    intro:'Użyj do globalnego pytania, czy wśród kilku średnich występują jakiekolwiek różnice. Analiza dotyczy testu omnibus, a nie konkretnej pary grup.',
    tool:['G*Power','F tests','ANOVA: Fixed effects, omnibus, one-way','A priori'],
    assumptions:[['Efekt f','Jeśli źródło podaje η², przelicz f = √[η²/(1−η²)] albo użyj Determine.'],['Liczba grup','Podaj wszystkie grupy objęte testem omnibus. G*Power zaokrągla N do pełnych równolicznych grup.'],['Kontrasty','Jeśli główna hipoteza dotyczy jednej pary lub kontrastu, zaplanuj moc również dla niego.'],['Korekty','Dla wielu porównań uwzględnij obniżone α w odpowiedniej analizie mocy.']],
    steps:['Zdecyduj: test omnibus czy konkretny kontrast jest hipotezą główną.','Uzasadnij f lub przelicz je z η².','Wybierz F tests → Fixed effects, omnibus, one-way.','Wprowadź f, α, moc i liczbę grup.','Osobno sprawdź kluczowe porównania, jeśli będą podstawą wniosku.'],
    example:'Dla trzech grup i η² = 0,06 otrzymujemy f ≈ 0,2526. Przy α = 0,05 i mocy 0,80 G*Power wskazuje N ≈ 156, czyli po 52 osoby; po zaokrągleniu f do 0,25 wynik wynosi N = 159.',
    trap:'Moc omnibus nie jest mocą różnicy między konkretnymi dwiema grupami. Analiza tylko dla F może nie zabezpieczać najważniejszego porównania.',
    report:'Dla jednoczynnikowej ANOVA przyjęto f = 0,2526, przeliczone z η² = 0,06. Przy trzech grupach, α = 0,05 i mocy 0,80 wymagana liczebność wyniosła N = 156, po 52 osoby w grupie.'
  },
  'anova-powtarzane': {
    no:'05', title:'ANOVA z powtarzanym pomiarem', subtitle:'Co najmniej dwa pomiary tych samych osób', tag:'zmiana w czasie',
    intro:'Dla trzech lub większej liczby pomiarów albo schematu grupa × czas. Najpierw wybierz efekt dokładnie odpowiadający głównej hipotezie.',
    tool:['G*Power','F tests','Repeated measures: within factors / within–between interaction / between factors','A priori'],
    assumptions:[['Właściwy efekt','Within factors bada zmianę; within–between interaction bada, czy zmiana różni się między grupami; between factors bada średnią różnicę grup.'],['Korelacja pomiarów','Nie przyjmuj automatycznie domyślnego 0,50. Dla niepewności policz kilka wiarygodnych scenariuszy.'],['Sferyczność ε','Dla dwóch pomiarów ε = 1. Dla ≥3 użyj informacji z podobnego badania lub sprawdź warianty konserwatywne.'],['Definicja efektu','Dla partial η² wybierz Options → as in SPSS. Dla efektu Cohena niezależnego od korelacji: as in Cohen (1988).']],
    steps:['Nazwij główny efekt: czas, grupa czy interakcja grupa × czas.','Ustal liczbę grup i pomiarów.','Dopasuj opcję definicji f do źródła efektu.','Wprowadź α, moc, korelację pomiarów i ε.','Powtórz analizę dla ostrożniejszych wartości niepewnych parametrów.'],
    example:'Dwie grupy, cztery pomiary i hipoteza interakcji grupa × czas. Dla partial η² = 0,05, opcji „as in SPSS”, α = 0,05, mocy 0,90 oraz ε = 1 potrzeba N = 94. Przy ε = 0,70 wynik rośnie do N = 120.',
    trap:'Opcja „as in Cohen (1988) — recommended” nie jest zawsze właściwa. Jeśli punktem wyjścia jest partial η² z wcześniejszego badania, wybierz „as in SPSS”. Nie używaj wariantów zgodności z G*Power 3.0.',
    report:'Analizę zaplanowano dla interakcji grupa × czas w ANOVA z powtarzanym pomiarem. Dla dwóch grup, czterech pomiarów, partial η² = 0,05, α = 0,05, mocy 0,90 i ε = 0,70 wymagane N wyniosło 120.'
  },
  'regresja-wielozmiennowa': {
    no:'06', title:'Regresja wielozmiennowa', subtitle:'Test całego modelu', tag:'predykcja',
    intro:'Ta analiza odpowiada na pytanie, czy cały zestaw predyktorów wyjaśnia wariancję Y lepiej niż model bez predyktorów.',
    tool:['G*Power','F tests','Linear multiple regression: Fixed model, R² deviation from zero','A priori'],
    assumptions:[['Cel testu','To test całego R², nie unikalnego wkładu jednego predyktora.'],['Efekt f²','Z R² oblicz f² = R²/(1−R²). Nie zaokrąglaj przedwcześnie.'],['Predyktory','Wpisz liczbę wszystkich predyktorów w modelu; interceptu nie licz.'],['Podobieństwo modelu','R² z literatury jest użyteczne tylko przy porównywalnym zestawie predyktorów i populacji.']],
    steps:['Sprawdź, czy główna hipoteza naprawdę dotyczy całego modelu.','Ustal oczekiwane R² i przelicz je na f².','Wybierz R² deviation from zero.','Wprowadź f², α, moc i liczbę predyktorów.','Jeśli ważny jest pojedynczy predyktor, wykonaj dodatkowo analizę przyrostu R².'],
    example:'Model pięciu cech osobowości osiągał R² = 0,13, czyli f² ≈ 0,149. Przy α = 0,05 i mocy 0,80 potrzeba N = 92; dla mocy 0,90 około N = 116.',
    trap:'Istotność całego modelu nie gwarantuje mocy dla konkretnego predyktora. Jego unikalny wkład jest zwykle mniejszy i może wymagać znacznie większej próby.',
    report:'Dla testu całego modelu regresji z pięcioma predyktorami przyjęto R² = 0,13, czyli f² = 0,149. Przy α = 0,05 i mocy 0,80 wymagana liczebność wyniosła N = 92.'
  },
  'regresja-hierarchiczna': {
    no:'07', title:'Regresja hierarchiczna', subtitle:'Test przyrostu R²', tag:'unikalny wkład',
    intro:'Stosuj, gdy pytasz, czy nowy predyktor lub blok zwiększa R² ponad zmienne wprowadzone wcześniej. Kolejność bloków musi wynikać z hipotezy, nie z wyniku.',
    tool:['G*Power','F tests','Linear multiple regression: Fixed model, R² increase','A priori'],
    assumptions:[['Efekt f²','f² = ΔR²/(1−R² pełnego modelu). Mianownik dotyczy modelu po dodaniu testowanego bloku.'],['Tested predictors','Liczba zmiennych dodawanych i testowanych łącznie w danym kroku.'],['Total predictors','Wszystkie predyktory pełnego modelu; bez interceptu.'],['Kolejność bloków','Ustal ją przed obejrzeniem danych, zgodnie z logiką hipotezy.']],
    steps:['Zapisz model bazowy i pełny.','Określ SESOI dla ΔR² lub użyj porównywalnych badań.','Oblicz f² z niezaokrąglonych R².','Wybierz R² increase i wpisz liczby tested oraz total predictors.','Zachowaj wzór, wartości pośrednie i wynik N.'],
    example:'Trzy zmienne kontrolne, następnie dwa nowe predyktory. Dla ΔR² = 0,05 i R² pełnego modelu = 0,20: f² = 0,0625. G*Power daje N = 158 dla mocy 0,80 i N = 206 dla 0,90.',
    trap:'Nie dziel ΔR² przez 1−R² modelu bazowego. Nie myl też dwóch pól liczby predyktorów: tutaj tested = 2, total = 5.',
    report:'Analizę a priori przeprowadzono dla przyrostu R². Przyjęto ΔR² = 0,05 i R² pełnego modelu = 0,20, co daje f² = 0,0625. Dla α = 0,05, mocy 0,80, dwóch testowanych i pięciu łącznie predyktorów wymagane było N = 158.'
  },
  moderacja: {
    no:'08', title:'Analiza moderacji', subtitle:'Interakcja X × W', tag:'efekt warunkowy',
    intro:'Moderacja pyta, czy związek X z Y zmienia się wraz z W. W regresji testujemy dodatkowy przyrost R² po dodaniu członu lub członów interakcyjnych.',
    tool:['G*Power','F tests','Linear multiple regression: Fixed model, R² increase','A priori'],
    assumptions:[['Moderator dychotomiczny','Najprostszy model: X, W i X×W; tested = 1, total = 3. Kontrole zwiększają total.'],['Moderator ciągły','Ustawienia są podobne, lecz moc zależy też od rzetelności, korelacji X–W i rozkładów. Dla głównej hipotezy rozważ InteractionPoweR lub Monte Carlo.'],['Moderator k-kategorialny','Potrzeba k−1 zmiennych wskaźnikowych i k−1 interakcji. Dla 3 kategorii: tested = 2, total = 5.'],['Efekty są małe','Interakcje często są znacznie słabsze od efektów głównych; nie zawyżaj f², by uzyskać wygodne N.']],
    steps:['Zdefiniuj X, Y i typ moderatora W.','Zapisz pełny model wraz z kodowaniem moderatora i kontrolami.','Ustal ΔR²/f² dla całego testowanego efektu interakcji.','Wprowadź tested predictors i total predictors.','Jeśli moderacja jest główna i ciągła, sprawdź realistyczną symulację.'],
    example:'Dychotomiczny moderator terapii: X = stres, W = udział w terapii, X×W. Dla f² = 0,02, α = 0,05, mocy 0,80, tested = 1 i total = 3 potrzeba około N = 395.',
    trap:'Brak istotnej interakcji w próbie zaplanowanej dla efektów głównych nie obala moderacji. Jeśli nie zapewniono mocy dla interakcji, interpretuj wynik ostrożnie.',
    report:'Moc zaplanowano dla przyrostu R² wynikającego z interakcji X×W. Przy f² = 0,02, α = 0,05, mocy 0,80, jednym testowanym i trzech łącznie predyktorach wymagane N wyniosło około 395.'
  },
  mediacja: {
    no:'09', title:'Analiza mediacji', subtitle:'Efekt pośredni a × b', tag:'mechanizm',
    intro:'W prostej mediacji X wiąże się z Y przez mediator M. Moc efektu pośredniego zależy jednocześnie od ścieżek a i b; zwykły moduł G*Power nie wystarcza.',
    tool:['Monte Carlo Power Analysis','One Mediator','Set Power, Vary N','symulacja'],
    assumptions:[['Wnioskowanie','Dopasuj metodę mocy do planowanego bootstrapowego lub Monte Carlo przedziału ufności efektu a×b.'],['Parametry','Użyj ścieżek a, b i efektu bezpośredniego c′ z tego samego, porównywalnego modelu albo bezpośrednio korelacji X, M i Y.'],['Replikacje i losowania','To różne liczby: replikacje to symulowane badania, a draws per rep służą do przedziału w każdym badaniu.'],['Projekt badania','Mediacja w danych poprzecznych nie wystarcza do wniosku przyczynowego o mechanizmie.']],
    steps:['Wybierz One Mediator i Set Power, Vary N.','Ustal zakres N oraz docelową moc.','Wybierz Standardized Coefficients albo Correlations.','Podaj a, b, c′ i SD = 1 dla parametrów standaryzowanych.','Ustaw np. 1000 replikacji, 20 000 losowań, 95% CI i zapisz Random Seed.','Po szerokim przeszukaniu zawęź zakres N i krok do 1.'],
    example:'Dla a = 0,39, b = 0,39 i c′ = 0,14 aplikacja daje moc około 0,78 przy N = 70 i 0,85 przy N = 80. Następnie warto przeszukać N = 70–80 krokiem 1 i zwiększyć liczbę replikacji.',
    table:[['a \ b','0,14','0,26','0,39','0,59'],['0,14','558','412','406','398'],['0,26','414','162','126','122'],['0,39','404','124','78','59'],['0,59','401','123','59','36']],
    trap:'c′ to efekt bezpośredni, nie całkowity c. Nie myl też korelacji X–M ze ścieżką b. Tabela Fritza–MacKinnona jest orientacyjną dolną granicą i zakłada pomiar bez błędu.',
    report:'Symulację Monte Carlo dla efektu pośredniego przeprowadzono dla a = 0,39, b = 0,39 i c′ = 0,14, przy 95% poziomie ufności, [liczba] replikacjach, [liczba] losowaniach na replikację i ziarnie [seed]. Wymagane N dla mocy 0,80 wyniosło [wynik].'
  },
  sem: {
    no:'10', title:'Modelowanie równań strukturalnych', subtitle:'Konkretna ścieżka albo dopasowanie modelu', tag:'SEM',
    intro:'W SEM nie istnieje jedna uniwersalna „moc modelu”. Najpierw wskaż, czy chcesz wykryć konkretny parametr, czy określone niedopasowanie całego modelu.',
    tool:['PAMLj / pwrSEM / semPower','zależnie od celu','parametr lub RMSEA','analitycznie / Monte Carlo'],
    assumptions:[['Konkretny parametr','Dla ścieżki, ładunku lub efektu pośredniego użyj PAMLj albo symulacji pwrSEM uwzględniającej cały model.'],['Globalne dopasowanie','Dla testu χ² lub podejścia opartego na RMSEA użyj semPower albo prostszego power4SEM.'],['Jakość pomiaru','Moc ścieżki zależy też od ładunków, rzetelności wskaźników i pozostałych parametrów.'],['Dwa cele','Jeśli ważne są parametr i dopasowanie, policz oba i przyjmij większe N.']],
    steps:['Zbuduj planowany model pomiarowy i strukturalny.','Wskaż główną hipotezę oraz parametr lub kryterium dopasowania.','Uzasadnij wszystkie parametry populacyjne na podstawie literatury.','Dobierz narzędzie do celu: ścieżka/parametr albo globalne dopasowanie.','Dla symulacji zapisz model, liczbę replikacji i seed.','Sprawdź scenariusze z ostrożniejszymi ładunkami lub efektami.'],
    example:'Jeśli hipoteza dotyczy konkretnej ścieżki między konstruktami latentnymi, pwrSEM może zasymulować jej moc przy założonych ładunkach i parametrach całego modelu. Jeżeli celem jest wykrycie niedopasowania, analiza oparta na RMSEA odpowiada innemu pytaniu i może dać inne N.',
    trap:'„200 osób” i „10 osób na parametr” nie są analizą mocy. Nie przenoś też mocy globalnego testu dopasowania na konkretną ścieżkę — ani odwrotnie.',
    report:'Liczebność próby dla modelu SEM zaplanowano pod kątem [konkretnego parametru / globalnego dopasowania]. Analizę wykonano w [narzędzie], przy założeniach [parametry modelu], α = [wartość], mocy [wartość], [liczbie replikacji] i ziarnie [seed]. Wymagane N wyniosło [wynik].'
  }
};
