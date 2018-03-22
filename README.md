# A parcel + vue project scaffold with service-worker supports

### 0. Self signed crt file, enable invaild certficates in Chrome

Change the last line in ssl.conf to your domain, then run this command in terminal

```bash
openssl req -config ssl.conf -new -sha256 -newkey rsa:2048 -nodes -keyout gum.key -x509 -days 365 -out gum.crt
```

Copy the crt ^ key files to nginx ssl config folder, then add these lines to server config file

```bash
ssl on;
ssl_certificate /usr/local/etc/nginx/ssl/gum.crt;
ssl_certificate_key /usr/local/etc/nginx/ssl/gum.key;

location /service-worker.js {
  alias /path/to/your/project/src/service-worker.js;
}
```

open chrome://flags/#allow-insecure-localhost, change the 'Allow invalid certificates for resources loaded from localhost.' option to enable


