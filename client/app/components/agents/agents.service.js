/**
 * This service uses the &http for a get request to find a list of agents matching a specified search string.
 */
class AgentsService {
  constructor($http) {
    this.$http = $http;

    /**
     * Find the top 10 agents matching the specified name. If no agents are found an empty array is returned.
     */
    this.findAgents = function(agentName) {
      return $http.get('https://api.ratemyagent.com.au/autosearch/agents?searchTerm=' + agentName)
        .then((response) => {
          if (response && response.data.Results.length > 0) {
            return response.data.Results
          } else {
            return [];
          }
        },(error) => {
          console.error('search failed: ', error);
        });
    }
  }
}

export default AgentsService;