INSERT INTO customers (user_fname, user_lname, user_email, user_pass_digest) VALUES

('David','Maul','dmaul12@gmail.com', '12345'),
('James','Dean','jd@gmail.com', '123'),
('Marko','Polo','mp@gmail.com','345');

INSERT INTO stayhere (stay_title, stay_price, stay_link, stay_address, stay_img, stay_email,stay_checkin_date,stay_checkout_date, stay_visit) VALUES

('Pod 39', 155.25, 'https://www.expedia.com/New-York-Hotels-Pod-39.h5321579.Hotel-Information', '145 East 39th Street, New York', 'http://media.expedia.com/hotels/6000000/5330000/5321600/5321579/5f216bd5_z.jpg','dmaul12@gmail.com','2016-07-28','2016-07-25', 'Park'),
('Park Central New York', 333.22, 'https://www.expedia.com/New-York-Hotels-Park-Central-New-York.h4164.Hotel-Information', '870 7th Ave, New York', 'http://media.expedia.com/hotels/1000000/10000/4200/4164/be69ccd8_z.jpg','dmaul12@gmail.com','2016-07-28','2016-07-25', 'Omega'),
('Hotel Pennsylvania', 202.21, 'https://www.expedia.com/New-York-Hotels-Hotel-Pennsylvania.h12887.Hotel-Information', '401 7th Ave, New York', 'http://media.expedia.com/hotels/1000000/20000/12900/12887/12887_196_z.jpg', 'mp@gmail.com','2016-07-28','2016-07-25', 'Sapphire');

INSERT INTO playhere (play_title, play_price, play_img, play_email,play_checkin_date,play_checkout_date, play_visit) VALUES

('Victoria City Tour & Butchart Gardens Visit', 153, '//a.travel-assets.com/lxweb/media-vault/194829_m.jpeg?v=102022', 'jd@gmail.com','2016-07-28','2016-07-25','Park'),
('Hop-On, Hop-Off City Tour', 33, '//a.travel-assets.com/lxweb/media-vault/277033_m.jpeg?v=102022', 'dmaul12@gmail.com','2016-07-28','2016-07-25','Park'),
('City Trolley Tour', 35, '//a.travel-assets.com/lxweb/media-vault/194729_m.jpeg?v=102022', 'dmaul12@gmail.com','2016-07-28','2016-07-25','Park');

INSERT INTO visit (visit_name, visit_budget, visit_email) VALUES('Park', 400, 'dmaul12@gmail.com')
