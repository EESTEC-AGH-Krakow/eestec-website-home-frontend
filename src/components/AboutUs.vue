<template>
	<ComponentLayout>
		<CardLayout :image="image" :title="title">
			<p class="text-justify mb-4 mb-sm-5">
				<span class="font-weight-bold">AGH Electrical Engineering and Computer Sciences Students’ Club</span> to uczelniana organizacja studencka - apolityczna i non-profit - od lat prężnie działająca na Akademii Górniczo-Hutniczej w Krakowie. Stanowimy lokalny komitet ogólnoeuropejskiej organizacji studenckiej <span class="font-weight-bold">EESTEC</span>, stąd częściej używamy naszej nieoficjalnej nazwy - <span class="font-weight-bold">EESTEC AGH Kraków</span>. Na Uczelni istniejemy
				nieprzerwanie od 1998 roku i choć wywodzimy się z Koła Naukowego Elektroników, to od 2009 roku działamy już w pełni samodzielnie. Szczególnie bliskie związki łączą nas ze studentami i władzami <span class="font-weight-bold">Wydziału Informatyki Elektroniki i Telekomunikacji</span> oraz <span class="font-weight-bold">Wydziału Elektrotechniki, Automatyki, Informatyki i Inżynierii Biomedycznej</span>.
			</p>
		</CardLayout>
	</ComponentLayout>
</template>

<script>
import ComponentLayout from '../layouts/ComponentLayout';
import CardLayout from '../layouts/CardLayout';

export default {
	name: 'AboutUs',
	components: {
		ComponentLayout,
		CardLayout
	},
	data() {
		return {
			image: {
				src: 'https://dummyimage.com/600x400/b0b0b0/fff',
				alt: 'image'
			},
			title: 'O nas'
		};
	}
};
</script>

<style scoped lang="scss"></style>
