# Projet API - Prix de l'or

## Présentation

Cette API inclus un CRUD accessible de '/gold-prices', permettant d'accéder au prix journalier de l'or.
Pour simplifier les appels, une doc SwaggerUI a été mise en place, accessible par '/api-docs'
Pour remplir la base de donnée MongoDB, du 2000-01-04 au 2022-09-02, un fichier goldprices.json est à la racine du projet.

Si l'auth par JWT est activé, on peux accéder aux routes de connexion par '/auth/signup' et '/auth/login'
Puis rajouter son token d'authentification dans le header 'Authorization', cela ne fonctionnera pas avec ma document SwaggerUI

## JWT

Je n'ai pas ajouté le jwt par défaut car je ne l'ai pas intégré dans Swagger UI.

Si besoin de tester il faut ajouter le middleware pour les headers :

```
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
```

Puis proteger les routes gold-price en ajoutant le middleware 'isAuth' à la route "/gold-price"


