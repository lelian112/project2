
-- USE gamja_farm;
use potato_farm;


DROP TABLE admin;
DROP TABLE user_country_code;
DROP TABLE user_visit;
DROP TABLE user_follow;
DROP TABLE user_gender;
DROP TABLE user_mbti;
DROP TABLE user_movie_wish;
DROP TABLE user_movie_rate;
DROP TABLE user_review;
DROP TABLE user_review_like;
DROP TABLE user_comment;
DROP TABLE user;
DROP TABLE movie_genre;
DROP TABLE movie_plot;
DROP TABLE movie_boxoffice;
DROP TABLE movie;


CREATE TABLE admin (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	id VARCHAR(100) UNIQUE,
	pw VARCHAR(30) NOT NULL,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	regist_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	termin_at DATETIME DEFAULT NULL
);
INSERT INTO admin (id, pw, name, email, termin_at) VALUES ('admin_test', '1234', 'test_user', 'test@email.com', NULL);


CREATE TABLE user (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	id VARCHAR(100) UNIQUE,
	pw VARCHAR(100),
	name VARCHAR(20),
	nick_name VARCHAR(20),
	email VARCHAR(200),
	pic VARCHAR(200),
	birth DATE,
	gender TINYINT,  -- user_gender에서 가져오기
	country_code VARCHAR(20),  -- +제외 한국은 '82'
	phone VARCHAR(20),
	mbti TINYINT,  -- user_mbti에서 가져오기
	caption VARCHAR(200),  -- 한줄소개
	grade VARCHAR(20),  -- ??
	last_login DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	regist_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	termin_at DATETIME DEFAULT NULL
);
INSERT INTO user (id, pw, name, email, pic, birth, gender, country_code, phone, mbti, caption, termin_at)
VALUES 
('example_id1', 'password1', 'John Doe', 'john@example.com', 'profile_pic1.jpg', '1990-01-01', 1, '+82', '123-456-4789', 1, 'Avid reader and coffee enthusiast', NULL),
('example_id2', 'password2', 'Jane Smith', 'jane@example.com', 'profile_pic2.jpg', '1992-05-15', 0, '+1', '010-1234-5678', 2, 'Passionate traveler and foodie', NULL),
('example_id3', 'password3', 'Bob Johnson', 'bob@example.com', 'profile_pic3.jpg', '1985-11-30', 1, '+123', '44555666', 3, 'Tech geek and movie buff', NULL);


CREATE TABLE user_gender (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	gender VARCHAR(20) UNIQUE
);
INSERT INTO user_gender (gender)
VALUES ('male'), ('female'), ('none'), ('both');


CREATE TABLE user_mbti (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	mbti VARCHAR(8) UNIQUE
);
INSERT INTO user_mbti (mbti)
VALUES ('ISTJ'), ('ISFJ'), ('INFJ'), ('INTJ'),
		('ISTP'), ('ISFP'), ('INFP'), ('INTP'),
		('ESTP'), ('ESFP'), ('ENFP'), ('ENTP'),
		('ESTJ'), ('ESFJ'), ('ENFJ'), ('ENTJ');


CREATE TABLE user_movie_wish (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	movie_code CHAR(8),
	wish ENUM('Y', 'N') DEFAULT 'N'  -- ??
);
INSERT INTO user_movie_wish (user_id, movie_code, wish) VALUES ('example_id1', 'B1JWJD01', 'Y');


CREATE TABLE user_movie_rate (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	movie_code CHAR(8),
	rate TINYINT DEFAULT 0
);
INSERT INTO user_movie_rate (user_id, movie_code, rate)
VALUES ('example_id2', 'B1JWJD01', 5);


CREATE TABLE user_review (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	movie_code CHAR(8),
	review VARCHAR(2000),
    view_cnt INT,
    regist_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO user_review (user_id, movie_code, review, view_cnt)
VALUES ('example_id2', 'B1JWJD01', '정말 멋진 영화입니다. 추천합니다.', 12);


CREATE TABLE user_review_like (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
    user_review_idx INT,
    like_btn INT  -- 눌르면 1, 안좋은면 0
);
INSERT INTO user_review_like (user_id, user_review_idx, like_btn)
VALUES ('example_id2', 1, 1);


CREATE TABLE user_comment (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
    user_review_idx INT,
	comment VARCHAR(2000)
);
INSERT INTO user_comment (user_id, user_review_idx, comment)
VALUES ('example_id2', 1, "아하하");


CREATE TABLE user_follow (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	user_follow VARCHAR(100)
);
INSERT INTO user_follow (user_id, user_follow)
VALUES ('example_id1', 'example_id3'),
('example_id1', 'example_id2'),
('example_id2', 'example_id1'),
('example_id2', 'example_id3');


CREATE TABLE user_visit (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	user_id VARCHAR(100),
	visit_cnt INT DEFAULT 0,
	visit_total INT DEFAULT 0
);
INSERT INTO user_visit (user_id, visit_cnt, visit_total)
VALUES ('example_id1', 0, 0), ('example_id2', 30, 60);


CREATE TABLE user_country_code (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	country_name VARCHAR(100),
    countkry_code VARCHAR(20)
);
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Afghanistan', '+93');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Albania', '+355');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Algeria', '+213');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('American Samoa', '+1-684');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Andorra', '+376');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Angola', '+244');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Anguilla', '+1-264');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Antarctica', '+672');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Antigua and Barbuda', '+1-268');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Argentina', '+54');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Armenia', '+374');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Aruba', '+297');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Australia', '+61');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Austria', '+43');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Azerbaijan', '+994');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Bahamas', '+1-242');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Bahrain', '+973');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Bangladesh', '+880');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Barbados', '+1-246');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Belarus', '+375');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Belgium', '+32');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Belize', '+501');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Benin', '+229');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Bermuda', '+1-441');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Bhutan', '+975');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Bolivia', '+591');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Bosnia and Herzegovina', '+387');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Botswana', '+267');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Brazil', '+55');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('British Indian Ocean Territory', '+246');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('British Virgin Islands', '+1-284');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Brunei', '+673');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Bulgaria', '+359');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Burkina Faso', '+226');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Burundi', '+257');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Cambodia', '+855');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Cameroon', '+237');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Canada', '+1');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Cape Verde', '+238');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Cayman Islands', '+1-345');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Central African Republic', '+236');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Chad', '+235');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Chile', '+56');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('China', '+86');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Christmas Island', '+61');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Cocos Islands', '+61');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Colombia', '+57');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Comoros', '+269');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Cook Islands', '+682');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Costa Rica', '+506');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Croatia', '+385');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Cuba', '+53');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Curacao', '+599');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Cyprus', '+357');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Czech Republic', '+420');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Democratic Republic of the Congo', '+243');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Denmark', '+45');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Djibouti', '+253');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Dominica', '+1-767');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Dominican Republic', '+1-809, 1-829, 1-849');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('East Timor', '+670');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Ecuador', '+593');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Egypt', '+20');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('El Salvador', '+503');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Equatorial Guinea', '+240');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Eritrea', '+291');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Estonia', '+372');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Ethiopia', '+251');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Falkland Islands', '+500');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Faroe Islands', '+298');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Fiji', '+679');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Finland', '+358');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('France', '+33');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('French Polynesia', '+689');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Gabon', '+241');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Gambia', '+220');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Georgia', '+995');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Germany', '+49');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Ghana', '+233');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Gibraltar', '+350');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Greece', '+30');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Greenland', '+299');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Grenada', '+1-473');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Guam', '+1-671');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Guatemala', '+502');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Guernsey', '+44-1481');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Guinea', '+224');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Guinea-Bissau', '+245');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Guyana', '+592');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Haiti', '+509');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Honduras', '+504');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Hong Kong', '+852');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Hungary', '+36');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Iceland', '+354');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('India', '+91');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Indonesia', '+62');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Iran', '+98');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Iraq', '+964');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Ireland', '+353');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Isle of Man', '+44-1624');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Israel', '+972');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Italy', '+39');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Ivory Coast', '+225');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Jamaica', '+1-876');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Japan', '+81');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Jersey', '+44-1534');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Jordan', '+962');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Kazakhstan', '+7');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Kenya', '+254');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Kiribati', '+686');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Kosovo', '+383');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Kuwait', '+965');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Kyrgyzstan', '+996');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Laos', '+856');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Latvia', '+371');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Lebanon', '+961');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Lesotho', '+266');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Liberia', '+231');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Libya', '+218');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Liechtenstein', '+423');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Lithuania', '+370');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Luxembourg', '+352');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Macau', '+853');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Macedonia', '+389');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Madagascar', '+261');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Malawi', '+265');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Malaysia', '+60');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Maldives', '+960');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Mali', '+223');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Malta', '+356');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Marshall Islands', '+692');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Mauritania', '+222');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Mauritius', '+230');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Mayotte', '+262');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Mexico', '+52');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Micronesia', '+691');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Moldova', '+373');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Monaco', '+377');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Mongolia', '+976');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Montenegro', '+382');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Montserrat', '+1-664');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Morocco', '+212');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Mozambique', '+258');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Myanmar', '+95');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Namibia', '+264');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Nauru', '+674');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Nepal', '+977');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Netherlands', '+31');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Netherlands Antilles', '+599');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('New Caledonia', '+687');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('New Zealand', '+64');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Nicaragua', '+505');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Niger', '+227');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Nigeria', '+234');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Niue', '+683');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('North Korea', '+850');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Northern Mariana Islands', '+1-670');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Norway', '+47');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Oman', '+968');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Pakistan', '+92');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Palau', '+680');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Palestine', '+970');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Panama', '+507');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Papua New Guinea', '+675');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Paraguay', '+595');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Peru', '+51');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Philippines', '+63');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Pitcairn', '+64');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Poland', '+48');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Portugal', '+351');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Puerto Rico', '+1-787, 1-939');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Qatar', '+974');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Republic of the Congo', '+242');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Reunion', '+262');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Romania', '+40');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Russia', '+7');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Rwanda', '+250');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Saint Barthelemy', '+590');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Saint Helena', '+290');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Saint Kitts and Nevis', '+1-869');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Saint Lucia', '+1-758');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Saint Martin', '+590');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Saint Pierre and Miquelon', '+508');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Saint Vincent and the Grenadines', '+1-784');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Samoa', '+685');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('San Marino', '+378');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Sao Tome and Principe', '+239');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Saudi Arabia', '+966');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Senegal', '+221');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Serbia', '+381');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Seychelles', '+248');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Sierra Leone', '+232');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Singapore', '+65');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Sint Maarten', '+1-721');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Slovakia', '+421');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Slovenia', '+386');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Solomon Islands', '+677');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Somalia', '+252');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('South Africa', '+27');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('South Korea', '+82');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('South Sudan', '+211');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Spain', '+34');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Sri Lanka', '+94');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Sudan', '+249');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Suriname', '+597');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Svalbard and Jan Mayen', '+47');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Swaziland', '+268');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Sweden', '+46');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Switzerland', '+41');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Syria', '+963');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Taiwan', '+886');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Tajikistan', '+992');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Tanzania', '+255');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Thailand', '+66');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Togo', '+228');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Tokelau', '+690');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Tonga', '+676');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Trinidad and Tobago', '+1-868');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Tunisia', '+216');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Turkey', '+90');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Turkmenistan', '+993');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Turks and Caicos Islands', '+1-649');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Tuvalu', '+688');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('U.S. Virgin Islands', '+1-340');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Uganda', '+256');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Ukraine', '+380');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('United Arab Emirates', '+971');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('United Kingdom', '+44');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('United States', '+1');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Uruguay', '+598');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Uzbekistan', '+998');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Vanuatu', '+678');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Vatican', '+379');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Venezuela', '+58');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Vietnam', '+84');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Wallis and Futuna', '+681');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Western Sahara', '+212');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Yemen', '+967');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Zambia', '+260');
INSERT INTO user_country_code (country_name, countkry_code) VALUES ('Zimbabwe', '+263');


CREATE TABLE movie (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	code CHAR(8) UNIQUE,
	name_kor VARCHAR(200),
	name_eng VARCHAR(200),
	release_at DATE,  -- 개봉일
	running_time INT,  -- 런닝타임
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
	award_1 VARCHAR(1600),
	award_2 VARCHAR(1600)
);
-- INSERT INTO movie (code, name_kor, name_eng, release_at, running_time, country, director_1, actor_1, watch_type, age_type, poster, stillcut_1, teaser)
-- VALUES ('B1JWJD01', '반지원정대', 'The Fellowship of the Ring', '2001-12-19', 178, '미국', '피터 잭슨', '일라이저 우드', '장편', '12세 이상 관람가', 'poster_b1jwjd01.jpg', 'stillcut_b1jwjd01_01.jpg', 'teaser_b1jwjd01.mp4');
-- INSERT INTO movie (code, name_kor, name_eng, release_at, running_time, country, director_1, director_2, actor_1, actor_2, actor_3, actor_4, actor_5, watch_type, age_type, poster, stillcut_1, stillcut_2, stillcut_3, teaser, award_1, award_2) VALUES 
-- ('MV000001', '어벤져스: 엔드게임', 'Avengers: Endgame', '2019-04-24', 181, '미국', '안소니 루소', '조 루소', '로버트 다우니 주니어', '크리스 에반스', '크리스 헴스워스', '마크 러팔로', '스칼렛 요한슨', '장편', '12세 이상 관람가', 'poster_mv000001.jpg', 'stillcut1_mv000001.jpg', 'stillcut2_mv000001.jpg', 'stillcut3_mv000001.jpg', 'teaser_mv000001.mp4', '2019 제45회 새턴 어워드 수상', '2019 제92회 아카데미 시상식 노미네이트'),
-- ('MV000002', '라라랜드', 'La La Land', '2016-12-07', 128, '미국', '데이미언 셔젤', NULL, '라이언 고슬링', '엠마 스톤', '존 레전드', '로즈마리 드윗', NULL, '장편', '15세 이상 관람가', 'poster_mv000002.jpg', 'stillcut1_mv000002.jpg', 'stillcut2_mv000002.jpg', 'stillcut3_mv000002.jpg', 'teaser_mv000002.mp4', '2017 제89회 아카데미 시상식 6개 부문 수상', '2017 제74회 골든 글로브 시상식 7개 부문 수상');


CREATE TABLE movie_genre (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	movie_code CHAR(8),
	genre_1 VARCHAR(100),
	genre_2 VARCHAR(100),
	FOREIGN KEY (movie_code) REFERENCES movie (code)
);
-- INSERT INTO movie_genre (movie_code, genre_1, genre_2) VALUES ('B1JWJD01', '판타지', '어드벤처');


CREATE TABLE movie_plot (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	movie_code CHAR(8),
	plot VARCHAR(10000),  -- 줄거리
	FOREIGN KEY (movie_code) REFERENCES movie (code)
);
-- INSERT INTO movie_plot (movie_code, plot)
-- VALUES ('B1JWJD01', '반지의 제왕 시리즈의 첫 번째 작품으로, 호빗인 프로도 반더갈이 마법사 간달프와 함께 반지를 파괴하기 위한 여행을 떠난다. 그 동안 호빗집에서 달랑 몇 가지
-- 		장난감 정도로 여겨졌던 반지가 사실은 사우론의 마술로 만들어진 악의 마력이 가득 담긴 파멸의 반지라는 것을 알게 된 후, 반더갈이 간달프와 함께 써론으로 떠난다.');


CREATE TABLE movie_boxoffice (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	type VARCHAR(20),
	box_at DATE,
	box_week VARCHAR(20),
	movie_code CHAR(8),
	ranking VARCHAR(20),
	name_kor VARCHAR(200),
	release_at DATE,
-- 	release_at VARCHAR(20),  -- https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230426
	total_audience INT  -- INT? VARCHAR(20)?
	-- FOREIGN KEY (movie_code) REFERENCES movie (code)  -- 이거 나중에 수정해야됨
);
-- INSERT INTO movie_boxoffice (type, box_at, box_week, movie_code, ranking, name_kor, release_at, total_audience)
-- VALUES ('주간 박스오피스', '2024-04-03', '1주차', 'B1JWJD01', '1위', '반지원정대', '2001-12-19', 1000000);
-- INSERT INTO movie_boxoffice (type, box_at, movie_code, ranking, name_kor, release_at, total_audience)
-- VALUES ('일일 박스오피스', '2024-04-03', 'B1JWJD01', '1위', '반지원정대', '2001-12-19', 1000000);


-- ===========================================================================
-- ===========================================================================


CREATE TABLE movie_minho (
	idx INT AUTO_INCREMENT PRIMARY KEY,
	code CHAR(8) UNIQUE,
	name_kor VARCHAR(200),
	genre_1 VARCHAR(100),
	genre_2 VARCHAR(100),
	plot VARCHAR(10000)
);
select * from movie_minho;


-- SELECT * FROM admin;
SELECT * FROM user;
-- SELECT * FROM user_gender;
-- SELECT * FROM user_mbti;
-- SELECT * FROM user_wish;
-- SELECT * FROM user_rate;
-- SELECT * FROM user_review;
-- SELECT * FROM user_review_like;
-- SELECT * FROM user_comment;
-- SELECT * FROM user_follow;
SELECT * FROM user_visit;
-- SELECT * FROM user_country_code;
SELECT * FROM movie;
-- SELECT * FROM movie WHERE name_kor LIKE "%%";
-- SELECT distinct age_type FROM movie;
-- SELECT * FROM movie where age_type like "%청소년%";
-- SELECT * FROM movie_genre;
-- SELECT distinct genre_1 FROM movie_genre;
-- SELECT * FROM movie_plot;
SELECT * FROM movie_boxoffice;


-- SELECT count(*) FROM admin;

-- SELECT user_mbti.mbti
-- FROM user
-- JOIN user_mbti ON user.mbti = user_mbti.idx
-- WHERE id = "example_id1";

INSERT INTO user
VALUES ("colin_test0", "1234", "colin0", "nick_name", "test@test.com", "1991-11-11", 1, "123.png", "82", "010-0000-0000", 5, "gkdkdkdkdk", 0);