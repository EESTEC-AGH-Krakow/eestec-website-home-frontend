<template>
	<Layout title="O nas">
		<b-row no-gutters>
			<b-col class="mx-auto" cols="12">
				<p class="text-justify mb-4 mb-sm-5">
					<span class="font-weight-bold">AGH Electrical Engineering and Computer Sciences Students’ Club</span> to uczelniana organizacja studencka - apolityczna i non-profit - od lat prężnie działająca na Akademii Górniczo-Hutniczej w Krakowie. Stanowimy lokalny komitet ogólnoeuropejskiej organizacji studenckiej <span class="font-weight-bold">EESTEC</span>, stąd częściej używamy naszej nieoficjalnej nazwy - <span class="font-weight-bold">EESTEC AGH Kraków</span>. Na Uczelni istniejemy
					nieprzerwanie od 1998 roku i choć wywodzimy się z Koła Naukowego Elektroników, to od 2009 roku działamy już w pełni samodzielnie. Szczególnie bliskie związki łączą nas ze studentami i władzami <span class="font-weight-bold">Wydziału Informatyki Elektroniki i Telekomunikacji</span> oraz <span class="font-weight-bold">Wydziału Elektrotechniki, Automatyki, Informatyki i Inżynierii Biomedycznej</span>.
				</p>
			</b-col>
			<b-col class="mx-auto" cols="12">
				<p class="text-justify mb-4 mb-sm-5">
					Później tu będzie content albo coś innego.
				</p>
			</b-col>
			<b-col class="mx-auto text-black" cols="12">
				<b-row>
					<b-col class="d-flex mb-3 mb-sm-0" cols="12" sm="6">
						<b-button class="flex-fill" size="lg" v-b-modal.modal-vision variant="outline-primary">Wizja</b-button>
						<b-modal centered hide-footer id="modal-vision" title="Wizja">
							<p class="my-4">Hello from modal!</p>
						</b-modal>
					</b-col>
					<b-col class="d-flex" cols="12" sm="6">
						<b-button class="flex-fill" size="lg" v-b-modal.modal-manifesto variant="outline-primary">Manifest</b-button>
						<b-modal centered hide-footer id="modal-manifesto" title="Manifest">
							<p class="my-4">Hello from modal!</p>
						</b-modal>
					</b-col>
				</b-row>
			</b-col>
		</b-row>
	</Layout>
</template>

<script>
import Layout from "./Layout";
export default {
	name: "AboutUs",
	components: {
		Layout
	}
};
</script>

<style scoped lang="scss"></style>
