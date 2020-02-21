<template>
    <div class="container-fluid">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active">Balai</li>
        </ol>

        <div class="card mb-3">
            <div class="card-header d-flex">
                <span>
                    <i class="fas fa-chart-area"></i>
                    Daftar Balai
                </span>
                <button
                    class="btn btn-primary btn-sm ml-auto"
                    v-on:click="showNewBalaiModal"
                >
                    <span class="fa fa-plus">Create Balai</span>
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
                                <th>ID</th>
                                <th>Nama Balai</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Nama Balai</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr v-for="(balai, index) in balai" :key="index">
                                <td>{{ balai.id }}</td>
                                <td>{{ balai.nmbalai }}</td>
                                <td>{{ balai.image }}</td>
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
        <b-modal ref="newBalaiModal" hide-footer title="Create New Balai">
            <div class="d-block">
                <form v-on:submit.prevent="createBalai">
                    <div class="form-group">
                        <label for="nmbalai">Nama balai</label>
                        <input
                            type="text"
                            v-model="balaiData.nmbalai"
                            class="form-control"
                            id="nmbalai"
                            placeholder="Nama balai"
                        />
                        <div class="invalid-feedback" v-if="errors.nmbalai">
                            {{ errors.nmbalai[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="image">Pilih Image</label>
                        <div v-if="balaiData.image.name">
                            <img
                                src=""
                                ref="newBalaiImageDisplay"
                                class="w-150px"
                            />
                        </div>
                        <input
                            type="file"
                            v-on:change="attachImage"
                            ref="newBalaiImage"
                            class="form-control"
                            id="image"
                        />
                        <div class="invalid-feedback" v-if="errors.image">
                            {{ errors.image[0] }}
                        </div>
                    </div>
                    <hr />
                    <div class="text-right">
                        <button
                            type="button"
                            class="btn btn-default"
                            v-on:click="hideNewBalaiModal"
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
import * as balaiService from "../services/balai_service";
export default {
    name: "balai",
    data() {
        return {
            balai: [],
            balaiData: {
                nmbalai: "",
                image: ""
            },
            errors: {}
        };
    },
    mounted() {
        this.loadBalai();
    },
    methods: {
        loadBalai: async function() {
            try {
                const response = await balaiService.loadBalai();
                console.log(response);
                this.balai = response.data.data;
                console.log(this.balai);
            } catch (error) {
                this.flashMessage.error({
                    message: "Ada kesalahan ulangi lagi!",
                    time: 5000
                });
            }
        },
        attachImage() {
            this.balaiData.image = this.$refs.newBalaiImage.files[0];
            let reader = new FileReader();
            reader.addEventListener(
                "load",
                function() {
                    this.$refs.newBalaiImageDisplay.src = reader.result;
                }.bind(this),
                false
            );

            reader.readAsDataURL(this.balaiData.image);
        },
        hideNewBalaiModal() {
            this.$refs.newBalaiModal.hide();
        },
        showNewBalaiModal() {
            this.$refs.newBalaiModal.show();
        },
        createBalai: async function() {
            let formData = new FormData();
            formData.append("nmbalai", this.balaiData.nmbalai);
            formData.append("image", this.balaiData.image);

            try {
                const response = await balaiService.createBalai(formData);
                console.log(response);
                this.hideNewBalaiModal();
                this.flashMessage.success({
                    message: "Balai telah di buat!",
                    time: 5000
                });
            } catch (error) {
                switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;
                    default:
                        this.flashMessage.error({
                            message: "Ada kesalahan ulangi lagi!",
                            time: 5000
                        });
                        break;
                }
            }
        }
    }
};
</script>
