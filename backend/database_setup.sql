CREATE DATABASE hacs_opensource;
-- Create Tables Necessary --
-- Might Change Values over time --
CREATE TABLE hacs_opensource.announcements  (
	id INT AUTO_INCREMENT, 
  title VARCHAR(255) NOT NULL, 
  content TEXT NOT NULL, 
  date DATE,
  PRIMARY KEY (id)
);

-- Might change how photos are stored, unsure as of now --
CREATE TABLE hacs_opensource.officers (
	id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  grade_level VARCHAR(255) NOT NULL,
  description TEXT,
  email VARCHAR(255),
  phone_number VARCHAR(255),
  photo_link VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE hacs_opensource.newsletter (
	id INT AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  pdf_link VARCHAR(255) NOT NULL,
  date DATE,
  PRIMARY KEY (id)
);

CREATE TABLE hacs_opensource.slides (
	id INT AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  pdf_link VARCHAR(255) NOT NULL,
  date DATE,
  PRIMARY KEY (id)
);

CREATE TABLE hacs_opensource.mentorship_program (
	id INT AUTO_INCREMENT,
  mentor VARCHAR(255) NOT NULL,
  mentee VARCHAR(255) NOT NULL,
  point_total INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE hacs_opensource.sponsors (
	id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  package_type VARCHAR(255) NOT NULL,
  logo_link VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE hacs_opensource.album (
	id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  album_size INT,
  date DATE,
  PRIMARY KEY (id)
);

CREATE TABLE hacs_opensource.pictures (
	id INT AUTO_INCREMENT,
    image_link VARCHAR(255) NOT NULL,
    album_id INT NOT NULL,
    date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (album_id) REFERENCES album(id)
);

-- Below are for Admin Login at a Later Time --
CREATE TABLE hacs_opensource.hacs_admin (
	id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Used to Handle Passport Login Sessions --
CREATE TABLE hacs_opensource.session (
	sid INT AUTO_INCREMENT,
  sess JSON NOT NULL,
  expire DATE,
  PRIMARY KEY (sid)
);