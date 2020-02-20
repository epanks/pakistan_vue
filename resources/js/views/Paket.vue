<template>
    <div class="container-fluid">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active">Paket</li>
        </ol>

        <div class="card mb-3">
            <div class="card-header d-flex">
                <span>
                    <i class="fas fa-chart-area"></i>
                    Daftar Paket
                </span>
                <button
                    class="btn btn-primary btn-sm ml-auto"
                    v-on:click="showNewPaketModal"
                >
                    <span class="fa fa-plus">Create Paket</span>
                </button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table
                        class="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                    >
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Paket</th>
                                <th>Pagu</th>
                                <th>Output</th>
                                <th>Satuan Output</th>
                                <th>Outcome</th>
                                <th>Satuan Outcome</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>No</th>
                                <th>Nama Paket</th>
                                <th>Pagu</th>
                                <th>Output</th>
                                <th>Satuan Output</th>
                                <th>Outcome</th>
                                <th>Satuan Outcome</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Customer Support</td>
                                <td>New York</td>
                                <td>27</td>
                                <td>2011/01/25</td>
                                <td>$112,000</td>
                                <td>$112,000</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">
                                        <span class="fa fa-edit"></span>
                                    </button>
                                    <button class="btn btn-danger btn-sm">
                                        <span class="fa fa-trash"></span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card-footer small text-muted">
                Updated yesterday at 11:59 PM
            </div>
        </div>
        <b-modal ref="newPaketModal" hide-footer title="Create New Paket">
            <div class="d-block">
                <form v-on:submit.prevent="createPaket">
                    <div class="form-group">
                        <label for="nmpaket">Nama Paket</label>
                        <input
                            type="text"
                            v-model="paketData.nmpaket"
                            class="form-control"
                            id="nmpaket"
                            placeholder="Nama Paket"
                        />
                    </div>
                    <div class="form-group">
                        <label for="pagurmp">Pagu Paket</label>
                        <input
                            type="number"
                            v-model="paketData.pagurmp"
                            class="form-control"
                            id="pagurmp"
                            placeholder="Pagu Paket"
                        />
                    </div>
                    <div class="form-group">
                        <label for="trgoutput">Output</label>
                        <input
                            type="number"
                            v-model="paketData.trgoutput"
                            class="form-control"
                            id="trgoutput"
                            placeholder="Output"
                        />
                    </div>
                    <div class="form-group">
                        <label for="satoutput">Satuan Output</label>
                        <input
                            type="text"
                            v-model="paketData.satoutput"
                            class="form-control"
                            id="satoutput"
                            placeholder="Satuan Output"
                        />
                    </div>
                    <div class="form-group">
                        <label for="trgoutcome">Outcome</label>
                        <input
                            type="number"
                            v-model="paketData.trgoutcome"
                            class="form-control"
                            id="trgoutcome"
                            placeholder="Outcome"
                        />
                    </div>
                    <div class="form-group">
                        <label for="trgoutcome">Satuan Outcome</label>
                        <input
                            type="text"
                            v-model="paketData.trgoutcome"
                            class="form-control"
                            id="trgoutcome"
                            placeholder="Satuan Outcome"
                        />
                    </div>
                    <hr />
                    <div class="text-right">
                        <button
                            type="button"
                            class="btn btn-default"
                            v-on:click="hideNewPaketModal"
                        >
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <span class="fa fa-check"></span> Save
                        </button>
                    </div>
                </form>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "paket",
    data() {
        return {
            paketData: {
                nmpaket: "",
                pagurmp: "",
                trgoutput: "",
                satoutput: "",
                trgoutcome: "",
                satourcome: ""
            }
        };
    },
    methods: {
        hideNewPaketModal() {
            this.$refs.newPaketModal.hide();
        },
        showNewPaketModal() {
            this.$refs.newPaketModal.show();
        },
        createPaket() {
            console.log("form submitted");
        }
    }
};
</script>
