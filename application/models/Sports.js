const { Admin_Model } = require('../../system/core/Admin_Model');
let result = {warning_message: ""};

class Sports extends Admin_Model {
    constructor() {
        super();
    }

    async search_players(post) {
        const { name, gender, sport } = post;
        let search_query = `SELECT * from sports_players WHERE name LIKE ?`;
        if(gender && gender.length > 0) {
            search_query += ` AND gender IN ('${gender.join(',')}')`;
        }
        if(sport && sport.length > 0) {
            search_query += ` AND sport IN ('${sport.join(',')}')`;
        }
        const name_search = name ? `%${name}%` : '%%';
        const query = this.Mysql.format(search_query, [name_search]);

        result['playersData'] = await this.getQuery(query);

        if(result['playersData'].length === 0) {
            result['warning_message'] = `No results found for "${name}"`;
        } else {
            result['warning_message'] = "";
        }
        return result;
    }

    async fetch_sports() {
        let query_category = this.Mysql.format(`SELECT sport FROM sports_players GROUP BY sport`);
        return await this.getQuery(query_category);
    }

    async fetch_all() {
        let query = this.Mysql.format(`SELECT * FROM sports_players`);
        
        result['playersData'] = await this.getQuery(query);
        result['sportsCategory'] = await this.fetch_sports();
        return result;
    }
}

module.exports = new Sports;
