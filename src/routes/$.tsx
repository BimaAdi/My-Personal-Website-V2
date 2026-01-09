import { createFileRoute } from "@tanstack/react-router";
import { I8n } from "@/client/components/shared/I8n";
import { useI8nStore } from "@/client/store/i8n";

export const Route = createFileRoute("/$")({
	component: RouteComponent,
});

function RouteComponent() {
	const lang = useI8nStore((state) => state.lang);

	return (
		<div className="text-center mt-20">
			{I8n(lang, {
				en: (
					<>
						<h1 className="text-3xl font-bold text-white">404 - Not Found</h1>
						<p className="mt-2 text-gray-600">
							The page you are looking for does not exist.
						</p>
					</>
				),
				id: (
					<>
						<h1 className="text-3xl font-bold text-white">
							404 - Tidak Ditemukan
						</h1>
						<p className="mt-2 text-gray-600">
							Halaman yang Anda cari tidak ada.
						</p>
					</>
				),
			})}
		</div>
	);
}
