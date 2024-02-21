# Initialisation de PGUSER
export PGUSER=spedata
export PGPASSWORD=spedata

# Suppression de la BDD "othentification" (si elle existe)
dropdb oblog  -h winhost

# Suppression du User "admin_othentification"
dropuser oblog  -h winhost

# Création d'un user propriétaire de la BDD - "admin_othentification"
createuser oblog  -P -h winhost # -P est un prompt pour demander le mot de passe

# Création de la BDD "ocolis"
createdb oblog -O oblog  -h winhost