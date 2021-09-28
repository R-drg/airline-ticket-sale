INSERT INTO airports (id, "name", city, country) 
VALUES('3674e4d6-d8da-4b27-a00e-334746479ea9'::uuid, 'Aeroporto de Congonhas', 'São Paulo', 'Brazil'),
('ffb2f946-fee4-42d8-b2f0-f18e449630f9'::uuid, 'Aeroporto do Galeão', 'Rio de Janeiro', 'Brazil'),
('3d08c0c8-a50b-4343-a55a-283a478c2865'::uuid, 'Aeroporto Charles de Gaulle', 'Paris', 'France'),
('c6f430dd-250a-473e-9996-99e803f264d1'::uuid, 'Heathrow Airport', 'London', 'United Kingdom'),
('98119b9b-f77c-4544-b440-daf3b51eef79'::uuid, 'Aeroporto Ten. Cel. Aviador César Bombonato', 'Uberlândia', 'Brazil');


INSERT INTO airlines
(id, "name")
VALUES('4218c160-d1df-470c-a80a-9229b18a8650'::uuid, 'LATAM'),
('2bb87d97-d898-4cf4-a2c7-06e120e2efa3'::uuid, 'GOL'),
('2cd40380-4289-42e6-8b04-221d174fd855'::uuid, 'BRITISH AIRLINES'),
('f079cb0d-2af6-4ca1-bc56-703fc06d857e'::uuid, 'AVIANCA'),
('1bd8ea1d-cbc7-4764-98b1-bd25f0feba56'::uuid, 'LUFTHANSA'),
('d25d1a5b-a18b-46c2-b02c-0747aef9b72e'::uuid, 'FRENCH AIRLINES');

INSERT INTO flights(code,departure_time,arrival_time,departure_location,arrival_location,price,airline_id,max_passangers) 
VALUES ('DEF123','12:00','14:00','3674e4d6-d8da-4b27-a00e-334746479ea9','98119b9b-f77c-4544-b440-daf3b51eef79',1000.00,'4218c160-d1df-470c-a80a-9229b18a8650',150);

INSERT INTO flights(code,departure_time,arrival_time,departure_location,arrival_location,price,airline_id,max_passangers) 
VALUES ('XYZ123','10:00','12:00','98119b9b-f77c-4544-b440-daf3b51eef79','3674e4d6-d8da-4b27-a00e-334746479ea9',1000.00,'4218c160-d1df-470c-a80a-9229b18a8650',150);

INSERT INTO flights(code,departure_time,arrival_time,departure_location,arrival_location,price,airline_id,max_passangers) 
VALUES ('ABC123','14:00','16:00','98119b9b-f77c-4544-b440-daf3b51eef79','3674e4d6-d8da-4b27-a00e-334746479ea9',1000.00,'4218c160-d1df-470c-a80a-9229b18a8650',150);
