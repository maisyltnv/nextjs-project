
import Sidebar from '@/components/Sidebar';
import { ReduxProviders } from '../../../../redux/provider';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReduxProviders>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-8">{children}</main>
            </div>
        </ReduxProviders>
    );
}