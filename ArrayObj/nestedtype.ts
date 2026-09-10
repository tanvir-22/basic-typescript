interface Database {
  host: string;
  port: number;
  user: string;
  password: string;
}

interface Appconfig {
  version: string;
  debug: boolean;
  database: Database; //using the type declared above
  feature: {
    darkmode: boolean;
    registration: string;
  };
}
