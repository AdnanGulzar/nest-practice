import { User } from 'src/user/entities/user.entity';

/* eslint-disable prettier/prettier */
const dbConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'adnan',
  database: 'practice',
  entities: [User],
  synchronize: true,
};

export default dbConfig;
