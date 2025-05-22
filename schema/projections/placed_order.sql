SELECT 
	o.id as id,
	c.name as name,
	o.createdat as date,
  	jsonb_agg(i.name) AS ingredients
FROM orderview AS o
INNER JOIN customerview AS c ON o.customer = c.id
INNER JOIN ingredientview AS i ON o.ingredients::jsonb ? i.id
GROUP BY o.id, c.name, o.createdat
ORDER BY o.createdat ASC
