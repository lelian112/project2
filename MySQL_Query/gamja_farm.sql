
-- USE gamja_farm;
USE potato_farm;

-- DROP TABLE admin;
-- DROP TABLE movie;
-- DROP TABLE movie_genre;
-- DROP TABLE movie_plot;
-- DROP TABLE movie_boxoffice;
-- DROP TABLE movie_minho;
-- DROP TABLE user;
-- DROP TABLE user_gender;
-- DROP TABLE user_mbti;
-- DROP TABLE user_country_code;
-- DROP TABLE user_follow;
-- DROP TABLE user_visit;
-- DROP TABLE user_review;
-- DROP TABLE user_review_like;
-- DROP TABLE user_comment;
-- DROP TABLE user_movie_wish;
-- DROP TABLE user_movie_rate;


CREATE TABLE admin (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	id VARCHAR(100) UNIQUE,
	pw VARCHAR(30) NOT NULL,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	regist_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	termin_at DATETIME DEFAULT NULL
);
INSERT INTO admin (id, pw, name, email) VALUES
('admin_minho', '1234', 'minho', 'minho@email.com'), ('admin_moo', '1234', 'moo', 'moo@email.com'), ('admin_changwoo', '1234', 'changwoo', 'changwoo@email.com'),
('admin_suyeon', '1234', 'suyeon', 'suyeon@email.com'), ('admin_gyucheol', '1234', 'gyucheol', 'gyucheol@email.com');


CREATE TABLE movie (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	code CHAR(8) UNIQUE,
	name_kor VARCHAR(200),
	name_eng VARCHAR(200),
	release_at DATE,
	running_time INT,
	country VARCHAR(100),
	director_1 VARCHAR(200),
	director_2 VARCHAR(200),
	actor_1 VARCHAR(200),
	actor_2 VARCHAR(200),
	actor_3 VARCHAR(200),
	actor_4 VARCHAR(200),
	actor_5 VARCHAR(200),
	watch_type VARCHAR(20),  -- 장편, 단편
	age_type VARCHAR(30),
	poster VARCHAR(200),
	stillcut_1 VARCHAR(200),
	stillcut_2 VARCHAR(200),
	stillcut_3 VARCHAR(200),
	teaser VARCHAR(200),
	award_1 VARCHAR(2500),
	award_2 VARCHAR(2500)
);


CREATE TABLE movie_genre (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	movie_code CHAR(8),
	genre_1 VARCHAR(100),
	genre_2 VARCHAR(100),
    keyword_1 VARCHAR(100),
    keyword_2 VARCHAR(100),
    keyword_3 VARCHAR(100),
    keyword_4 VARCHAR(100),
    keyword_5 VARCHAR(100),
    keyword_6 VARCHAR(100),
    keyword_7 VARCHAR(100),
    keyword_8 VARCHAR(100),
    keyword_9 VARCHAR(100),
    keyword_10 VARCHAR(100)
	-- FOREIGN KEY (movie_code) REFERENCES movie (code)
);


CREATE TABLE movie_plot (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	movie_code CHAR(8),
	plot VARCHAR(10000)
	-- FOREIGN KEY (movie_code) REFERENCES movie (code)
);


CREATE TABLE movie_boxoffice (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	type VARCHAR(20),
	box_at DATE,
	box_week VARCHAR(20),
	movie_code CHAR(8),
	ranking int,
	name_kor VARCHAR(200),
	release_at DATE,
	total_audience INT  -- INT? VARCHAR(20)?
	-- FOREIGN KEY (movie_code) REFERENCES movie (code)  -- 이거 나중에 수정해야됨
);


CREATE TABLE movie_minho (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	code CHAR(8) UNIQUE,
	name_kor VARCHAR(200),
	genre_1 VARCHAR(100),
	genre_2 VARCHAR(100),
	plot VARCHAR(10000)
);


CREATE TABLE user (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	id VARCHAR(100) UNIQUE,
	pw VARCHAR(100),
	name VARCHAR(20),
	nick_name VARCHAR(20),
	email VARCHAR(200),
	pic VARCHAR(500),
	birth DATE,
	gender VARCHAR(20),
	country_code VARCHAR(20),
	phone VARCHAR(20),
	mbti VARCHAR(8),
	caption VARCHAR(200),
    python_konlpy VARCHAR(200),
	role VARCHAR(20),
    type VARCHAR(200),
	last_login DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	regist_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	termin_at DATETIME DEFAULT NULL
);
-- INSERT INTO user (id, pw, name, email, birth, gender, country_code, phone, mbti, caption, termin_at, role) VALUES 
-- ('example_id12', 'password1', 'John Doe', 'john@example.com', '1990-01-01', 1, '+82', '123-456-4789', 1, 'Avid reader and coffee enthusiast', NULL, "user");


CREATE TABLE user_gender (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	gender VARCHAR(20) UNIQUE
);
INSERT INTO user_gender (gender) VALUES ('male'), ('female'), ('none'), ('both');


CREATE TABLE user_mbti (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	mbti VARCHAR(8) UNIQUE
);
INSERT INTO user_mbti (mbti) VALUES
('ISTJ'), ('ISFJ'), ('INFJ'), ('INTJ'), ('ISTP'), ('ISFP'), ('INFP'), ('INTP'),
('ESTP'), ('ESFP'), ('ENFP'), ('ENTP'), ('ESTJ'), ('ESFJ'), ('ENFJ'), ('ENTJ');


CREATE TABLE user_country_code (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	country_name VARCHAR(100),
	country_code VARCHAR(20)
);
INSERT INTO user_country_code (country_name, country_code) VALUES 
('Afghanistan', '+93'), ('Albania', '+355'), ('Algeria', '+213'), ('American Samoa', '+1-684'), ('Andorra', '+376'), ('Angola', '+244'), ('Anguilla', '+1-264'), ('Antarctica', '+672'), ('Antigua and Barbuda', '+1-268'), ('Argentina', '+54'), ('Armenia', '+374'), ('Aruba', '+297'), ('Australia', '+61'), ('Austria', '+43'), ('Azerbaijan', '+994'), ('Bahamas', '+1-242'), ('Bahrain', '+973'), ('Bangladesh', '+880'), ('Barbados', '+1-246'), ('Belarus', '+375'), ('Belgium', '+32'), ('Belize', '+501'), ('Benin', '+229'), ('Bermuda', '+1-441'), ('Bhutan', '+975'), ('Bolivia', '+591'), ('Bosnia and Herzegovina', '+387'), ('Botswana', '+267'), ('Brazil', '+55'), ('British Indian Ocean Territory', '+246'), ('British Virgin Islands', '+1-284'), ('Brunei', '+673'), ('Bulgaria', '+359'), ('Burkina Faso', '+226'), ('Burundi', '+257'), ('Cambodia', '+855'), ('Cameroon', '+237'), ('Canada', '+1'), ('Cape Verde', '+238'), ('Cayman Islands', '+1-345'), ('Central African Republic', '+236'), ('Chad', '+235'), ('Chile', '+56'), ('China', '+86'), ('Christmas Island', '+61'), ('Cocos Islands', '+61'), ('Colombia', '+57'), ('Comoros', '+269'), ('Cook Islands', '+682'), ('Costa Rica', '+506'), ('Croatia', '+385'), ('Cuba', '+53'), ('Curacao', '+599'), ('Cyprus', '+357'), ('Czech Republic', '+420'), ('Democratic Republic of the Congo', '+243'), ('Denmark', '+45'), ('Djibouti', '+253'), ('Dominica', '+1-767'), ('Dominican Republic', '+1-809, 1-829, 1-849'), ('East Timor', '+670'), ('Ecuador', '+593'), ('Egypt', '+20'), ('El Salvador', '+503'), ('Equatorial Guinea', '+240'), ('Eritrea', '+291'), ('Estonia', '+372'), ('Ethiopia', '+251'), ('Falkland Islands', '+500'), ('Faroe Islands', '+298'), ('Fiji', '+679'), ('Finland', '+358'), ('France', '+33'), ('French Polynesia', '+689'), ('Gabon', '+241'), ('Gambia', '+220'), ('Georgia', '+995'), ('Germany', '+49'), ('Ghana', '+233'), ('Gibraltar', '+350'), ('Greece', '+30'), ('Greenland', '+299'), ('Grenada', '+1-473'), ('Guam', '+1-671'), ('Guatemala', '+502'), ('Guernsey', '+44-1481'), ('Guinea', '+224'), ('Guinea-Bissau', '+245'), ('Guyana', '+592'), ('Haiti', '+509'), ('Honduras', '+504'), ('Hong Kong', '+852'), ('Hungary', '+36'), ('Iceland', '+354'), ('India', '+91'), ('Indonesia', '+62'), ('Iran', '+98'), ('Iraq', '+964'), ('Ireland', '+353'), ('Isle of Man', '+44-1624'), ('Israel', '+972'), ('Italy', '+39'), ('Ivory Coast', '+225'), ('Jamaica', '+1-876'), ('Japan', '+81'), ('Jersey', '+44-1534'), ('Jordan', '+962'), ('Kazakhstan', '+7'), ('Kenya', '+254'), ('Kiribati', '+686'), ('Kosovo', '+383'), ('Kuwait', '+965'), ('Kyrgyzstan', '+996'), ('Laos', '+856'), ('Latvia', '+371'), ('Lebanon', '+961'), ('Lesotho', '+266'), ('Liberia', '+231'), ('Libya', '+218'), ('Liechtenstein', '+423'), ('Lithuania', '+370'), ('Luxembourg', '+352'), ('Macau', '+853'), ('Macedonia', '+389'), ('Madagascar', '+261'), ('Malawi', '+265'), ('Malaysia', '+60'), ('Maldives', '+960'), ('Mali', '+223'), ('Malta', '+356'), ('Marshall Islands', '+692'), ('Mauritania', '+222'), ('Mauritius', '+230'), ('Mayotte', '+262'), ('Mexico', '+52'), ('Micronesia', '+691'), ('Moldova', '+373'), ('Monaco', '+377'), ('Mongolia', '+976'), ('Montenegro', '+382'), ('Montserrat', '+1-664'), ('Morocco', '+212'), ('Mozambique', '+258'), ('Myanmar', '+95'), ('Namibia', '+264'), ('Nauru', '+674'), ('Nepal', '+977'), ('Netherlands', '+31'), ('Netherlands Antilles', '+599'), ('New Caledonia', '+687'), ('New Zealand', '+64'), ('Nicaragua', '+505'), ('Niger', '+227'), ('Nigeria', '+234'), ('Niue', '+683'), ('North Korea', '+850'), ('Northern Mariana Islands', '+1-670'), ('Norway', '+47'), ('Oman', '+968'), ('Pakistan', '+92'), ('Palau', '+680'), ('Palestine', '+970'), ('Panama', '+507'), ('Papua New Guinea', '+675'), ('Paraguay', '+595'), ('Peru', '+51'), ('Philippines', '+63'), ('Pitcairn', '+64'), ('Poland', '+48'), ('Portugal', '+351'), ('Puerto Rico', '+1-787, 1-939'), ('Qatar', '+974'), ('Republic of the Congo', '+242'), ('Reunion', '+262'), ('Romania', '+40'), ('Russia', '+7'), ('Rwanda', '+250'), ('Saint Barthelemy', '+590'), ('Saint Helena', '+290'), ('Saint Kitts and Nevis', '+1-869'), ('Saint Lucia', '+1-758'), ('Saint Martin', '+590'), ('Saint Pierre and Miquelon', '+508'), ('Saint Vincent and the Grenadines', '+1-784'), ('Samoa', '+685'), ('San Marino', '+378'), ('Sao Tome and Principe', '+239'), ('Saudi Arabia', '+966'), ('Senegal', '+221'), ('Serbia', '+381'), ('Seychelles', '+248'), ('Sierra Leone', '+232'), ('Singapore', '+65'), ('Sint Maarten', '+1-721'), ('Slovakia', '+421'), ('Slovenia', '+386'), ('Solomon Islands', '+677'), ('Somalia', '+252'), ('South Africa', '+27'), ('South Korea', '+82'), ('South Sudan', '+211'), ('Spain', '+34'), ('Sri Lanka', '+94'), ('Sudan', '+249'), ('Suriname', '+597'), ('Svalbard and Jan Mayen', '+47'), ('Swaziland', '+268'), ('Sweden', '+46'), ('Switzerland', '+41'), ('Syria', '+963'), ('Taiwan', '+886'), ('Tajikistan', '+992'), ('Tanzania', '+255'), ('Thailand', '+66'), ('Togo', '+228'), ('Tokelau', '+690'), ('Tonga', '+676'), ('Trinidad and Tobago', '+1-868'), ('Tunisia', '+216'), ('Turkey', '+90'), ('Turkmenistan', '+993'), ('Turks and Caicos Islands', '+1-649'), ('Tuvalu', '+688'), ('U.S. Virgin Islands', '+1-340'), ('Uganda', '+256'), ('Ukraine', '+380'), ('United Arab Emirates', '+971'), ('United Kingdom', '+44'), ('United States', '+1'), ('Uruguay', '+598'), ('Uzbekistan', '+998'), ('Vanuatu', '+678'), ('Vatican', '+379'), ('Venezuela', '+58'), ('Vietnam', '+84'), ('Wallis and Futuna', '+681'), ('Western Sahara', '+212'), ('Yemen', '+967'), ('Zambia', '+260'), ('Zimbabwe', '+263');


CREATE TABLE user_follow (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	user_follow VARCHAR(100)
);
-- INSERT INTO user_follow (user_id, user_follow) VALUES
-- ('example_id1', 'example_id3'), ('example_id1', 'example_id2'),
-- ('example_id2', 'example_id1'), ('example_id2', 'example_id3');


CREATE TABLE user_visit (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	visit_cnt INT DEFAULT 0,
	visit_total INT DEFAULT 0
);
-- INSERT INTO user_visit (user_id, visit_cnt, visit_total) VALUES
-- ('example_id1', 0, 0), ('example_id2', 30, 60);


CREATE TABLE user_review (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	movie_code CHAR(8),
	review VARCHAR(2000),
	view_cnt INT DEFAULT 0,
	regist_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- INSERT INTO user_review (user_id, movie_code, review, view_cnt) VALUES
-- ('example_id2', 'B1JWJD01', '정말 멋진 영화입니다. 추천합니다.', 12);


CREATE TABLE user_review_like (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	user_review_idx INT,
	like_btn INT  -- 눌르면 1, 안누르면 0
);
-- INSERT INTO user_review_like (user_id, user_review_idx, like_btn) VALUES ('example_id2', 1, 1);
INSERT INTO user_review_like (user_id, user_review_idx, like_btn) VALUES ('layla_1292', 29, 1);


CREATE TABLE user_comment (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	user_review_idx INT,
	comment VARCHAR(2000),
	regist_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- INSERT INTO user_comment (user_id, user_review_idx, comment) VALUES ('example_id2', 1, "아하하");


CREATE TABLE user_movie_rate (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	movie_code CHAR(8),
	rate decimal(3,1),
	regist_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- INSERT INTO user_movie_rate (user_id, movie_code, rate) VALUES ('test', '20236614', 1);


CREATE TABLE user_movie_wish (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	movie_code CHAR(8),
	wish ENUM('Y', 'N') DEFAULT 'N',
	regist_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- INSERT INTO user_movie_wish (user_id, movie_code, wish) VALUES ('example_id1', 'B1JWJD01', 'Y');




-- SELECT * FROM admin;
SELECT * FROM movie;
SELECT * FROM movie_genre;
SELECT * FROM movie_plot;
SELECT * FROM movie_boxoffice;
-- SELECT * FROM movie_minho;
SELECT * FROM user;
-- delete from user where id = "colin_test01";
-- SELECT * FROM user_gender;
-- SELECT * FROM user_mbti;
-- SELECT * FROM user_country_code;
-- SELECT * FROM user_follow;
-- SELECT * FROM user_visit;
-- SELECT * FROM user_review;
-- SELECT * FROM user_review_like;
-- SELECT * FROM user_comment;
SELECT * FROM user_movie_wish;
insert into user_movie_wish (user_id, movie_code, wish) values ("zoe_4054", "20234675", "Y"), ("zoe_4054", "20236614", "Y");
-- SELECT * FROM user_movie_rate;

