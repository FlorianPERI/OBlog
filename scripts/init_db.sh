
export PGUSER=spedata
export PGPASSWORD=spedata


dropdb oblog  -h winhost


dropuser oblog  -h winhost


createuser oblog  -P -h winhost

createdb oblog -O oblog  -h winhost