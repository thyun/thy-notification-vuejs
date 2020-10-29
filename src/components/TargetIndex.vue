<template>
    <main role="main" class="wrapper container">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-primary">
            <h1 class="h2">Targets</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <a href="new-target.html" class="btn btn-primary">Create Target</a>
            </div>
        </div>

        <p> Manage target addresses such as phone numbers, email addresses, slack webhook url, etc</p>
        <form th:action="@{/targets}" method="get">
            <div class="form-group row">
                <div class="col-sm-4">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="search" name="search" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit">Search</button>
                        </div>
                    </div>
                </div>
                <nav aria-label="targets pages">
                    <ul class="pagination">
                        <li th:class="${pagination.hasPrevious()} ? 'page-item' : 'page-item disabled'"><a class="page-link" th:href="@{/targets?page={page}(page=${pagination.getNumber()-1})}">Previous</a></li>
                        <li th:class="${pagination.hasNext()} ? 'page-item' : 'page-item disabled'"><a class="page-link" th:href="@{/targets?page={page}(page=${pagination.getNumber()+1})}">Next</a></li>
                    </ul>
                </nav>
            </div>
        </form>


        <div class="table-responsive">
            <h3 v-if="targets.length == 0">No targets yet!</h3>
            <table v-if="targets.length > 0" class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Phones(Mobile)</th>
                        <th>Emails</th>
                        <th>Slack webhook</th>
                        <th>MS Teams webhook</th>
                        <th>Custom webhook</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="target in targets">
                        <td>{{ target.key }}</td>
                        <td>{{ target.phone }}</td>
                        <td>{{ target.email }}</td>
                        <td>{{ target.slack }}</td>
                        <td>{{ target.msteams }}</td>
                        <td>
                            <span>{{ target.webhookList }}
                            </span>
                        </td>
                        <td>
                            <a href="#" v-on:click="editTarget(target.id)"><i class="fas fa-user-edit fa-lg"></i></a>
                            <a href="#" v-on:click="deleteTarget(target.id)"><i class="fas fa-user-times fa-lg"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      targets: [
      ]
    }
  },
  methods: {
  }
}
</script>
