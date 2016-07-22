/** CREATE DATABASE staycation before enter schema and seed **/

DROP TABLE IF EXISTS customers;
CREATE TABLE customers (
user_id SERIAL PRIMARY KEY NOT NULL,
user_fname VARCHAR(50) NOT NULL,
user_lname VARCHAR(50) NOT NULL,
user_email VARCHAR  NOT NULL,
user_pass_digest VARCHAR NOT NULL
);

DROP TABLE IF EXISTS stayhere;
CREATE TABLE stayhere (
stay_id SERIAL PRIMARY KEY NOT NULL,
stay_title VARCHAR NOT NULL,
stay_price DECIMAL(7,2) NOT NULL,
stay_link VARCHAR NOT NULL,
stay_address VARCHAR NOT NULL,
stay_img VARCHAR NOT NULL,
stay_email VARCHAR NOT NULL,
stay_user_id INT references customers(user_id)
);

DROP TABLE IF EXISTS playhere;
CREATE TABLE playhere (
play_id SERIAL PRIMARY KEY NOT NULL,
play_title VARCHAR NOT NULL,
play_price DECIMAL(7,2) NOT NULL,
play_img VARCHAR NOT NULL,
play_email VARCHAR NOT NULL,
play_user_id INT references customers(user_id)
);

DROP TABLE IF EXISTS visit;
CREATE TABLE visit (
visit_id SERIAL PRIMARY KEY NOT NULL,
visit_play_id INT references playhere(play_id),
visit_stay_id INT references stayhere(stay_id),
visit_user_id INT references customers(user_id),
visit_user_email VARCHAR NOT NULL,
visit_startdate DATE,
visit_enddate DATE,
visit_budget DECIMAL(7,2) NOT NULL
);
