set -ex

PROJECT=tulover
USER=lipp
SERVER=lipp.local 

pnpm install
pnpm build

cp nginx.conf dist/
rsync -vr dist/*   $USER@$SERVER:/home/$USER/projects/$PROJECT/
ssh $USER@$SERVER "sudo nginx -t && sudo nginx -s reload"


# curl -L pastel.kapochamo.com | head 
# Create a symlink on the server: 
#  sudo ln -fs /home/lipp/projects/tulover/nginx.conf /etc/nginx/conf.d/tulover.kapochamo.com.conf
# Restart NGINX
#   sudo nginx -t && sudo nginx -s reload
