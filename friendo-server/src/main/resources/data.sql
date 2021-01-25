-- User user@email.pass/pass
INSERT INTO users (email,first_name,last_name ,mobile_phone,city, password, role,birth_date,status)
  values (    'admin@email.com',
  'elmehdi',
  'zangui',
  '0601010202',
  'Casablanca',
    '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a',
    'ROLE_ADMIN',
    '12-02-1990',
    1
    );
INSERT INTO users (email,first_name,last_name ,mobile_phone,city, password, role,birth_date,status)
  values (    'user@email.com',
  'user',
  'said',
  '0601010202',
  'Casablanca',
    '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a',
    'ROLE_USER',
    '12-02-1990',
    1
    );
---- User user@email.pass/pass
--INSERT INTO users (first_name, email, password, status)
--  values ('user',
--    'user@email.com',
--    '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a',
--    1);
--
--INSERT INTO authorities (email, authority)
--  values ('user@email.com', 'ROLE_USER');
--
--INSERT INTO authorities (email, authority)
--  values ('admin@email.com', 'ROLE_ADMIN');