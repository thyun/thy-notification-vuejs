<template>
    <main role="main" class="container">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-primary">
            <h1 class="h2">New Target</h1>
        </div>

        <form class="needs-validation" novalidate v-on:submit.prevent="createTarget">
            <div class="form-group row">
                <label for="key" class="col-sm-2 col-form-label">Key<strong>*</strong></label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="key" placeholder="Unique key" v-model="target.key">
                    <span v-if="errors.key != 'undefined'" v-cloak class="text-danger">{{ errors.key }}</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="phone" class="col-sm-2 col-form-label">Phones</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="phone"
                           placeholder="Phone number list (ex) 01230004001 01230004002" v-model="target.phone">
                    <span v-if="errors.phone != 'undefined'" v-cloak class="text-danger">{{ errors.phone }}</span>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Emails</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="email"
                           placeholder="Email address list (ex) aaaa@example.com bbbb@example.com" v-model="target.email">
                    <span class="text-danger"></span>
                </div>
            </div>
            <div class="form-group row">
                <label for="slack" class="col-sm-2 col-form-label">Slack webhook</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="slack" placeholder="Slack webhook url" v-model="target.slack">
                    <span class="text-danger"></span>
                    <div class="alert alert-primary">
                        <ul>
                            <li><a href="https://api.slack.com/incoming-webhooks#sending_messages" target="_blank">How
                                to create slack webhook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="msteams" class="col-sm-2 col-form-label">MS Teams webhook</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="msteams" placeholder="MS Teams webhook url"
                           v-model="target.msteams">
                    <span class="text-danger"></span>
                    <div class="alert alert-primary">
                        <ul>
                            <li>
                                <a href="https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook"
                                   target="_blank">How to create MS Teasm webhook</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="form-group" id="webhook-url-group">
                <fieldset class="entry">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Custom webhook</label>

                        <!-- Webhook URL right column (+/- button) -->
                        <!--
                        <div class="col-sm-1 order-md-2 mb-2">
                          <div class="row">
                            <button type="button" class="btn btn-outline-primary btn-sm add-entry">+</button>
                            <button type="button" class="btn btn-outline-primary btn-sm remove-entry">-</button>
                          </div>
                        </div>
                        -->

                        <!-- Webhook URL content column --->
                        <div class="col-sm-9 order-md-1">
                            <div class="row mb-2">
                                <div class="col-md-3">
                                    <input type="text" class="form-control form-control-sm webhook-url-name"
                                           placeholder="Name" value="" required="">
                                    <!--
                                    <div class="input-group input-group-sm">
                                      <input th:field="*{webhookList[__${itemStat.index}__].name}" type="text" class="form-control webhook-url-name" placeholder="Name" value="" required="">
                                      <div class="input-group-append">
                                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose</button>
                                        <div class="dropdown-menu">
                                          <a class="dropdown-item" href="javascript:void(0)" value="slack">Slack</a>
                                          <a class="dropdown-item" href="javascript:void(0)" value="ms-teams">MS Teams</a>
                                        </div>
                                      </div>
                                    </div>
                                    -->
                                    <span v-if="false" class="text-danger"></span>
                                </div>
                                <div class="col-md-3">
                                    <select class="custom-select custom-select-sm d-block w-100 webhook-url-method"
                                            required="">
                                        <option value="">Choose method</option>
                                        <option value="GET">GET</option>
                                        <option value="POST">POST</option>
                                    </select>
                                    <span v-if="false" class="text-danger"></span>
                                </div>
                            </div>

                            <div class="mb-2">
                                <input type="text" class="form-control form-control-sm webhook-url-url"
                                       placeholder="URL">
                                <span v-if="false" class="text-danger"></span>
                            </div>

                            <div class="mb-2">
                                <textarea type="text" class="form-control form-control-sm webhook-url-body" rows="1"
                                          placeholder="HTTP POST Body (Optional)"></textarea>
                                <span v-if="false" class="text-danger"></span>
                            </div>
                            <hr class="mb-4">
                        </div>
                    </div>
                </fieldset>
            </div>

            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Create Target</button>
                </div>
            </div>
        </form>
    </main>
</template>

<script>
export default {
  data () {
    return {
      target: {
        key: '',
        phone: '',
        email: '',
        slack: '',
        msteams: ''
      },
      errors: {
      }
    }
  },
  methods: {
  }
}
</script>
