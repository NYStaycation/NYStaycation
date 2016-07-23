/** CREATE DATABASE staycation before enter schema and seed **/

DROP TABLE IF EXISTS customers;
CREATE TABLE customers (
user_id SERIAL NOT NULL,
user_fname VARCHAR(50) NOT NULL,
user_lname VARCHAR(50) NOT NULL,
user_email VARCHAR UNIQUE PRIMARY KEY NOT NULL,
user_pass_digest VARCHAR NOT NULL
);

DROP TABLE IF EXISTS visit;
CREATE TABLE visit (
visit_id SERIAL PRIMARY KEY NOT NULL,
visit_name VARCHAR NOT NULL,
visit_budget DECIMAL(7,2) NOT NULL,
visit_created_date timestamp not null default now(),
visit_email VARCHAR NOT NULL
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
stay_created_date timestamp not null default now(),
stay_checkin_date date,
stay_checkout_date date,
stay_v_id INT references visit(visit_id),
stay_visit VARCHAR NOT NULL
);

DROP TABLE IF EXISTS playhere;
CREATE TABLE playhere (
play_id SERIAL PRIMARY KEY NOT NULL,
play_title VARCHAR NOT NULL,
play_price DECIMAL(7,2) NOT NULL,
play_img VARCHAR NOT NULL,
play_email VARCHAR NOT NULL,
play_checkin_date date,
play_checkout_date date,
play_v_id INT references visit(visit_id),
play_visit VARCHAR NOT NULL
);


