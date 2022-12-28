DROP TABLE IF EXISTS products;
CREATE TABLE products (
	id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL UNIQUE,
	price FLOAT NOT NULL,
	isForAdults BOOLEAN NOT NULL
);

INSERT INTO products (name, price, isForAdults) VALUES 
('Чіпси Лейс 200 грам', 54.0, FALSE),
('Попкорн S', 25.0, FALSE),
('Попкорн M', 40.0, FALSE),
('Попкорн X', 60.0, FALSE),
('Попкорн XL', 90.0, FALSE),
('Попкорн карамельний S', 45.0, FALSE),
('Попкорн карамельний M', 60.0, FALSE),
('Попкорн карамельний X', 80.0, FALSE),
('Попкорн карамельний XL', 110.0, FALSE),
('Пиво "Львівську" 0.5л', 35.60, TRUE);

DROP TYPE IF EXISTS eGender;
CREATE TYPE eGender AS ENUM ('Male', 'Female', 'Non-binary');

DROP TYPE IF EXISTS eRole;
CREATE TYPE eRole AS ENUM ('user', 'admin', 'staff');

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
	uuid UUID DEFAULT gen_random_uuid(),

	first_name VARCHAR(255) NOT NULL,
	middle_name VARCHAR(255),
	last_name VARCHAR(255) NOT NULL,

	gender eGender NOT NULL,
	date_of_birth DATE NOT NULL,

	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	role VARCHAR(255) DEFAULT 'user'
);

insert into users (first_name, middle_name, last_name, gender, email, date_of_birth, password) values
('Nils', null, 'Stollberg', 'Male', 'nstollberg0@eventbrite.com', '03.04.2022', 'mrWnmnTf'),
('Willard', 'II', 'Sedge', 'Male', 'wsedge1@globo.com', '28.02.2022', 'd59yQr8'),
('Hali', null, 'Oene', 'Non-binary', 'hoene2@mediafire.com', '20.01.2022', 'ZGXW5SK9FMXC'),
('Darcee', 'IV', 'Livsey', 'Non-binary', 'dlivsey3@chronoengine.com', '28.09.2022', 'HjRMeOxa6CB'),
('Anselma', null, 'Molyneux', 'Female', 'amolyneux4@vistaprint.com', '09.09.2022', '3nqFnfC'),
('Husain', null, 'Mechell', 'Male', 'hmechell5@usatoday.com', '11.04.2022', 'ZOPJ3gdaaT'),
('Ezequiel', 'Sr', 'Ricson', 'Male', 'ericson6@gravatar.com', '06.04.2022', 'qZLG3d4V4x'),
('Joyce', null, 'Danev', 'Female', 'jdanev7@wired.com', '15.05.2022', 'JlY6QXnQ0'),
('Aura', 'III', 'Gawthorp', 'Female', 'agawthorp8@ezinearticles.com', '06.11.2022', 'k5Arf3wql6'),
('Hermia', null, 'Grayshan', 'Female', 'hgrayshan9@github.io', '30.08.2022', 'TFItOZTPcZmk'),
('Michale', 'III', 'Paolotto', 'Male', 'mpaolottoa@dedecms.com', '07.11.2022', 'zfjv2bnGd'),
('Erhart', 'II', 'Reach', 'Male', 'ereachb@mail.ru', '10.06.2022', 'JNmmFjFFAO9'),
('Joela', 'IV', 'Basant', 'Female', 'jbasantc@google.de', '04.07.2022', 'r6dcG5FL'),
('Pammie', 'Jr', 'Taberer', 'Female', 'ptabererd@meetup.com', '21.02.2022', 'i1HWVHb'),
('Randie', 'Jr', 'Muehler', 'Female', 'rmuehlere@tamu.edu', '29.06.2022', 'JHSgv9SRKI'),
('Cameron', 'III', 'Southcott', 'Male', 'csouthcottf@hostgator.com', '09.09.2022', 'hMuGY1UYP'),
('Nikolaus', 'IV', 'Tremblet', 'Male', 'ntrembletg@techcrunch.com', '31.08.2022', 'QcE4DY2R'),
('Von', 'Jr', 'Flux', 'Male', 'vfluxh@is.gd', '23.07.2022', 'VfDHisUDwYnJ'),
('Raddy', 'II', 'Gilham', 'Male', 'rgilhami@qq.com', '12.01.2022', 'LGxD0V0uA0qW'),
('Dareen', 'Sr', 'Martina', 'Female', 'dmartinaj@irs.gov', '24.10.2022', 'PogL5tp');

DROP TABLE IF EXISTS films;
CREATE TABLE films (
	id SERIAL NOT NULL PRIMARY KEY,

	name VARCHAR(255) NOT NULL UNIQUE,
	age SMALLINT NOT NULL,
	year SMALLINT NOT NULL,
	original_name VARCHAR(255) NOT NULL,
	director VARCHAR(255) NOT NULL,
	language VARCHAR(255) NOT NULL,
	genre VARCHAR(255) NOT NULL,
	duration VARCHAR(5) NOT NULL,
	studio VARCHAR(255) NOT NULL,
	screenwriters VARCHAR(255) NOT NULL,
	starring TEXT NOT NULL,
	rating FLOAT NOT NULL,
	description TEXT NOT NULL,

	rental_start DATE NOT NULL,
	rental_ending DATE NOT NULL,
	cover_url TEXT NOT NULL
);

INSERT INTO films (name, age, year, original_name, director, language, genre, duration, studio, screenwriters, starring, description, rating, rental_start, rental_ending, cover_url) VALUES 
('Аватар: Шлях води', 12, 2022, 'AVATAR: THE WAY OF WATER', 'Джеймс Кемерон', 'українська мова', 'Фентезі, Пригоди, Екшн', '3:10', '20th Century Studios, TSG Entertainmentd, Lightstorm Entertainment', 'Джеймс Кемерон, Джош Фрідман, Шейн Салерно', 'Сем Вортінґтон, Зої Салдана, Сіґурні Вівер, Джемейн Клемент, Мішель Єо, Джованні Рібізі, Оона Чаплін, Кліфф Кертіс, Стівен Ленґ та інші.', 'Історія фільму «Аватар: Шлях води» розгортається більше ніж через десятиліття після подій першого фільму. Стрічка розповідає про сім’ю Саллі (Джейка, Нейтірі та їхніх дітей), проблеми, які їх переслідують, шлях, який вони долають, щоб захистити одне одного від небезпек, битви, які вони ведуть, щоб залишитися живими, і трагедії, які вони переживають разом.', 4.9, '15.12.2022', '28.01.2023', 'https://kino-teatr.ua/public/main/films/2022-11/poster_636270ca8b3fc.jpg'),
('Люта нічка', 16, 2022, 'Violent Night', 'Томмі Віркола', 'українська мова', 'Комедія, Пригоди, Екшн', '1:55', 'Universal', 'Томмі Віркола', 'Девід Гарбор, Кем Жиґанде.', 'У розпал свят на одній з вечірок група жорстоких найманців бере у заручники заможну родину. Допомогу чекати нізвідки, тому Санта Клаусу доведеться самотужки рятувати Різдво.', 4.5, '01.12.2022', '12.01.2023', 'https://s.0532.ua/section/afisha_event/upload/pers/11/img/afisha/000/000/011/violentnightpic1_6387517ad2a69.jpg'),
('Коза Ностра. Мама їде', 16, 2022, 'Коза Ностра. Мама їде', 'Джованні Дота', 'українська мова', 'Комедія, Сімейний', '1:40', 'FILM UA Production (Україна), Pepito Produzioni та Rai Cinema (Італія) за підтримки Державного агентства України з питань кіно', 'Анастасія Лодкіна, Маттео Вісконті, Джованні Дота, Джулія Магда Мартінез', 'Ірма Вітовська, Джованні Калканьо, Джудітта Васіле, Лоренцо Скальцо, Габріеле Чічірелло, Мауріціо Болонья, Вінченцо Пірротта, Дмитро Вівчарук, Ольга Вівчарук та інші.', 'Головна героїня фільму Влада Коза продає свій дім у Карпатах та летить до сонячної Сицилії, щоб жити з донькою та допомагати в догляді за онуком. Та виявляється, приїзду мами ніхто не чекав… Після сварки з донькою Влада випадково опиняється на віллі колись могутнього італійського мафіозі дона Фредо, нині вдівця, який переживає глибокі кризи – особистісну, сімейну та фінансову. Влада влаштовується прибиральницею, але стає порятунком цього дому: мамою для дітей дона Фредо та реформаторкою дотепер старої, неефективної та, головне, негуманної мафії.', 3.5, '01.12.2022', '12.01.2023', 'https://s.04563.com.ua/section/kinoanons_images/upload/images/afisha_kino/gallery/000/055/021/poster63771d0e179d7_63851cf300c07.jpeg'),
('Все завжди і водночас', 16, 2022, 'Everything Everywhere All at Once', 'Деніел Шайнерт, Деніел Кван', 'українська мова', 'Комедія, Фантастика, Екшн', '2:20', 'A24', 'Ден Кван, Деніел Шайнерт', 'Мішель Єо, Джеймі Лі Кертіс', 'Ви можете бути будь-ким і будь-коли, адже в мультивсесвіті існують тисячі ваших Варіантів. Існують й тисячі версій Евелін - вона може бути будь-ким: відомою акторкою, талановитим шеф-кухарем, оперною дівою або майстром бойових мистецтв. Вона може отримати доступ до спогадів, емоцій та неймовірних здібностей різних версій себе. Кажуть, що так можна врятувати світ. І якщо зовсім пощастить, то розібратися з найстрашнішим злом - власними податками.', 3.7, '01.12.2022', '12.01.2023', 'https://planetakino.ua/res/get-poster/00000000000000000000000000003587/EEAAO-vend.jpg'),
('Вищий пілотаж', 12, 2022, 'Devotion', 'Джастін Діллард', 'українська мова', 'Бойовик, Військовий, Драма, Екшн', '2:18', 'Sony Pictures Entertainment', 'Джастін Діллард', 'Джонатан Мейджерс, Ґлен Пауелл, Серінда Свон, Томас Садоскі, Дарен Кагасофф','Драма ґрунтується на реальних подіях, що сталися під час Корейської війни. Історія про льотчиків 32-ї ударної ескадрильї винищувачів ВПС США Тома Гаднера і Джеса Брауна. За виконання загальної диверсійної операції вони стали бойовими товаришами. Однак після того, як літак Брауна зазнав аварії на ворожій території, їхній дружбі потрібно було пройти сувору перевірку.', 3.8, '01.12.2022', '12.01.2023', 'https://multiplex.ua/images/d3/77/d377f397fea06e2426e3fe67ec97de63.jpeg');

DROP TABLE IF EXISTS cinemas;
CREATE TABLE cinemas (
	id SERIAL NOT NULL PRIMARY KEY,

	name VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	street VARCHAR(255) NOT NULL,
	phone_number VARCHAR(13),
	opening_time TIME NOT NULL,
  closing_time TIME NOT NULL
);

INSERT INTO cinemas (name, city, street, opening_time, closing_time, phone_number) VALUES
('Любава', 'Черкаси', 'бул. Шевченко, 208/1', '08:00', '22:00', '0 800 505 333'),
('ДНІПРО ПЛАЗА', 'Черкаси', 'вул. Припортова, 34', '08:00', '22:00', '0 800 505 333'),
('ТРЦ "LAVINA"', 'Київ', 'вул. Берковецька, 6Д', '08:00', '22:00', NULL),
('RESPUBLIKA PARK', 'Київ', 'Кільцева дорога, 1', '08:00', '22:00', NULL),
('RETROVILLE SCREENX', 'Київ', 'пр-т Правди, 47', '08:00', '22:00', NULL),
('ТРК "ПРОСПЕКТ"', 'Київ', 'вул. Гната Хоткевича, 1В', '08:00', '22:00', NULL),
('ТРЦ "ГЛОБАЛ UA"', 'Житомир', 'вул. Київська, 77', '12:00', '20:00', NULL),
('ПРОМІНЬ', 'Луцьк', 'пр-т Грушевського, 2', '10:00', '22:00', '068 897 79 70');

DROP TYPE IF EXISTS eJobTitle;
CREATE TYPE eJobTitle AS ENUM ('cinemas_director', 'ticket_seller', 'product_seller', 'cleaner', 'cloakroom_attendant', 'accountant', 'mannager');

DROP TYPE IF EXISTS eDayOfWeek;
CREATE TYPE eDayOfWeek AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

DROP TABLE IF EXISTS staffs;
CREATE TABLE staffs (
	id SERIAL NOT NULL PRIMARY KEY,
	uuid UUID DEFAULT gen_random_uuid(),

	first_name VARCHAR(255) NOT NULL,
	middle_name VARCHAR(255),
	last_name VARCHAR(255) NOT NULL,

	gender eGender NOT NULL,
	date_of_birth DATE NOT NULL,

	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	role eRole DEFAULT 'staff',

	job_title eJobTitle NOT NULL,
	salary FLOAT NOT NULL,
	workday_starts_at TIME NOT NULL,
  workday_ends_at TIME NOT NULL,
  dayoffs eDayOfWeek[] NOT NULL
);

INSERT INTO staffs (first_name, middle_name, last_name, gender, date_of_birth, email, password, job_title, salary, workday_starts_at, workday_ends_at, dayoffs) values
('Myrah', 'Jr', 'Klimentov', 'Non-binary', '6/1/1962', 'mklimentov0@rakuten.co.jp', 'N96XOkdzESVu', 'cinemas_director', 1758.52, '08:00', '20:00', '{}'::eDayOfWeek[]),
('Rache', NULL, 'Zieme', 'Non-binary', '1/3/1979', 'rzieme1@nhs.uk', 'w9ZhphYa', 'ticket_seller', 1492.83, '08:30', '21:00', '{Saturday,Sunday}'::eDayOfWeek[]),
('Mercy', NULL, 'Lagden', 'Female', '11/6/2010', 'mlagden2@mediafire.com', 'h6x1wJ', 'ticket_seller', 1471.12, '11:00', '20:30', '{Saturday,Sunday}'::eDayOfWeek[]),
('Krispin', NULL, 'Kiffe', 'Male', '8/1/1990', 'kkiffe3@google.ca', 'PaLn4Kw', 'product_seller', 1585.93, '08:00', '22:00', '{Saturday,Sunday}'::eDayOfWeek[]),
('Harwilll', NULL, 'Voak', 'Male', '9/7/2022', 'hvoak4@phoca.cz', '9XxWWlIIfr6N', 'product_seller', 1694.94, '08:30', '22:30', '{Saturday, Sunday}'::eDayOfWeek[]),
('Chrotoem', NULL, 'Kingsley', 'Non-binary', '11/11/1961', 'ckingsley5@blog.com', 'yTL6QwUSl', 'cleaner', 1383.18, '08:00', '22:00', '{Saturday, Sunday}'::eDayOfWeek[]),
('Fancy', 'Jr', 'Aberkirdo', 'Female', '1/5/1953', 'faberkirdo6@cisco.com', 'uIO2kKG8', 'cloakroom_attendant', 1652.66, '08:00', '22:00', '{Saturday, Sunday}'::eDayOfWeek[]),
('Genia', NULL, 'Geale', 'Female', '7/12/1996', 'ggeale7@naver.com', 'JvZ8mAmn3SW0', 'accountant', 1606.24, '11:00', '22:00', '{Saturday, Sunday}'::eDayOfWeek[]),
('Annissa', NULL, 'Alwood', 'Non-binary', '9/5/1984', 'aalwood8@issuu.com', 'jzZ3dIP7fvb5', 'mannager', 1653.47, '09:00', '20:00', '{Saturday, Sunday}'::eDayOfWeek[]),
('Pete', NULL, 'Aizik', 'Male', '26/1/1976', 'paizik9@hexun.com', 'ftJzFDNxXGb', 'product_seller', 1738.48, '09:45', '23:00', '{Sunday, Monday}'::eDayOfWeek[]);

CREATE TABLE sessions (
	id SERIAL PRIMARY KEY,

	cinema_id INTEGER REFERENCES cinemas(id),
	film_id INTEGER REFERENCES films(id),

	hall VARCHAR(10) NOT NULL,
	starts_at TIMESTAMP NOT NULL,
	ends_at TIMESTAMP NOT NULL
);

INSERT INTO sessions (cinema_id, film_id, hall, starts_at, ends_at) VALUES
(3, 1, 'A', '2002-12-20 13:30:00', '2002-12-20 15:30:00');

DROP TABLE IF EXISTS ticket_prices;
CREATE TABLE ticket_prices (
	id SERIAL NOT NULL PRIMARY KEY,
	type VARCHAR(25),
	price FLOAT
);

INSERT INTO ticket_prices (type, price) VALUES
('GOOD', 80.0),
('SUPER LUX', 140.0);

DROP TABLE IF EXISTS tickets;
CREATE TABLE tickets (
	id SERIAL NOT NULL PRIMARY KEY,
	hash UUID DEFAULT gen_random_uuid(),

	user_id INTEGER REFERENCES users(id),
	session_id INTEGER REFERENCES sessions(id),
	ticket_price_id INTEGER REFERENCES ticket_prices(id)
);

INSERT INTO tickets (user_id, session_id, ticket_price_id) VALUES
(6, 1, 1),
(18, 1, 2);
