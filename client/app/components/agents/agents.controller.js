/**
 * This controller finds a list of agents using the typed in search name.
 * Shows a message if no matching agents where found.
 */
class AgentsController {
  constructor(agentsService) {
    this.name = 'agents';
    this.searchName = '';
    this.agents = [];
    this.message = '';

    this.search = function() {
      this.message = '';
      agentsService.findAgents(this.searchName)
        .then((response) => {
          this.agents = response;
          if (this.agents.length == 0) {
            this.message = 'No agents matching that name found.';
          }
        },(error) => {
          console.error('search failed: ', error);
          this.message = 'Error searching for agents.';
        });
    }
  }
}

export default AgentsController;
