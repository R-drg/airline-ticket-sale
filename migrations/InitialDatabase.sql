-- create UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_date TIMESTAMPTZ
);

--unique email address 
ALTER TABLE users
ADD CONSTRAINT user_email_unique UNIQUE (email);

-- tokens for user authentication
CREATE TABLE session_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    token VARCHAR(255) NOT NULL,
    user_id UUID NOT NULL,
    created_date TIMESTAMPTZ,
    expires INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- airports table
CREATE TABLE airports(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

-- airlines
CREATE TABLE airlines(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL
);

-- flights table
CREATE TABLE flights(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(50),
    departure_time TIMESTAMPTZ,
    arrival_time TIMESTAMPTZ,
    departure_location UUID,
    arrival_location UUID,
    price INTEGER,
    airline_id UUID,
    max_passangers INTEGER,
    FOREIGN KEY (departure_location) REFERENCES airports(id),
    FOREIGN KEY (arrival_location) REFERENCES airports(id),
    FOREIGN KEY (airline_id) REFERENCES airlines(id)
);

-- user flights relation table
CREATE TABLE tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID,
    flight_id UUID,
    seat VARCHAR(4),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (flight_id) REFERENCES flights(id)
);



