-- script to create normal db
\echo 'Delete and recreate lifetracker db?'
\prompt 'Return yes or control-C to cancel >' answer


DROP DATABASE lifetracker;
CREATE DATABASE lifetracker;
\connect lifetracker;

\i lifetracker-schema.sql


-- script to create test database
\echo 'Delete and recreate lifetracker_test db?'
\prompt 'Return yes or control-C to cancel >' answer


DROP DATABASE lifetracker_test;
CREATE DATABASE lifetracker_test;
\connect lifetracker_test;

\i lifetracker-schema.sql
