/**
 * ### Página inicial
Para montar esta página você precisará consumir do seguinte endpoint: 
`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`, 
ele já te retornará as últimas 10 postagens cadastradas, 
cada item do array deve representar uma card contendo:

- Imagem destacada: Você encontrará um atributo chamado `_embedded`, 
dentro deste atributo você encontrará o `wp:featuredmedia`;
- Título;
- Link para a postagem: O link deverá conter o atributo `slug`;

Ao final da listagem deve haver um botão nomeado **Carregar mais...**, 
Quando o usuário clicar neste botão você deverá fazer uma nova requisição para 
o mesmo endpoint informando o parâmetro `page`, este parâmetro deve 
receber o número da próxima página, 
exemplo: `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2`. 

Você deve estar se perguntando, "como sei se haverá uma próxima página?", isso é simples, 
no **Header** de resposta desta requisição virá 2 atributos necessários para 
essa façanha `X-WP-Total` que diz a quantidade total de postagens que essa categoria possui, 
e o parâmetro `X-WP-TotalPages` que te informará qual o total de 
páginas de postagens que essa categoria possui.
 */



