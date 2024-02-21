import 'dotenv/config';
import client from '../src/services/dbClient.js';
import posts from '../data/posts.json' assert { type: 'json' };
import categories from '../data/categories.json' assert { type: 'json' };

async function insertCategories() {
    try {
        await client.query('TRUNCATE category CASCADE;');

        for (const category of categories) {
            const query = {
                text: `INSERT INTO category (route, label) VALUES ($1, $2);`,

                values: [category.route, category.label],
            };
            await client.query(query);
        }

        console.log('Valeurs catégories insérées');
    } catch (error) {
        // Gérer l'erreur ici
        console.error(
            "Erreur lors de l'insertion des catégories :",
            error.message
        );
    }
}

async function insertPosts() {
    try {
        await client.query('TRUNCATE post CASCADE;');

        for (const post of posts) {
            const postQuery = {
                text: 'INSERT INTO post (category_id, slug, title, excerpt, content) SELECT id, $2, $3, $4, $5 FROM category WHERE label = $1;',
                values: [
                    post.category,
                    post.slug,
                    post.title,
                    post.excerpt,
                    post.content,
                ],
            };

            await client.query(postQuery);
        }
        console.log('Valeurs posts insérées');
    } catch {
        console.error("Erreur lors de l'insertion des posts :", error.message);
    }
}

async function main() {
    await insertCategories();
    await insertPosts();
}
main();
