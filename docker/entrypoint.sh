#!/bin/sh

# Wait for PostgreSQL to be ready
until pg_isready -h db -p 5432 -U "$POSTGRES_USER"; do
  echo "Waiting for Postgres..."
  sleep 2
done

# Run Prisma migration
echo "Running Prisma migrate..."
npx prisma migrate deploy

# Start the app
exec "$@"
