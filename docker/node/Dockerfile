FROM    node:8.9.1

WORKDIR /var/www
ADD     run.sh /run.sh
RUN     chmod -v +x /run.sh
EXPOSE  3001

CMD     ["/run.sh"]
