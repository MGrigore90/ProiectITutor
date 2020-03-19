--tema 8--
SELECT * FROM users;

SELECT nume, prenume FROM users;

SELECT DISTINCT adresa FROM users;

--tema9--
--WHERE Clause Example-
SELECT * FROM users
WHERE adresa='Bucuresti';

SELECT * FROM users
WHERE varsta>=18;
--AND Operator--
SELECT * FROM users
WHERE varsta>=18 AND adresa='Bucuresti';
--filter / order--
SELECT * FROM users
ORDER BY adresa ASC, varsta;
--add new user--
INSERT INTO users
VALUES (Ioana, Pop, 0784567899, , 36);   
--select the date with valid colums--
SELECT nume, prenume, varta
FROM users
WHERE varta IS NOT NULL;

--tema10--
--update missing value-
UPDATE users
SET adresa = 'Botosani'
WHERE nume = 'Ioana' AND pronume = 'Pop';
--delete a user-
DELETE FROM users WHERE nume = 'Ioana' AND pronume = 'Pop';
--select top-
SELECT TOP 2 * FROM users
WHERE adresa='Bucuresti';
--Min selection-
SELECT MIN(varta) AS Tanar
FROM users; 
--count contacts-
SELECT COUNT(telefon) FROM users DESC;
--select users on Orange-
SELECT *
FROM users
WHERE telefon LIKE '074%' OR '075%';
--select users on pattern (Bucuresti, Bacau s.a)-
SELECT * FROM users
WHERE adresa LIKE 'B_c';
--select users with IN Operator-
SELECT * FROM users
WHERE adresa IN ('Bucuresti', 'Bacau', 'Botosani');
--select users BETWEEN 20 AND 40 age-
SELECT * FROM users
WHERE varsta BETWEEN 20 AND 40;
--Alias Column--
SELECT adresa AS oras
FROM users;