import Sidebar from '../features/sidebar/component/Sidebar';
import ContentArea from '../features/content/components/ContentArea';
import Footer from '../components/footer/Footer';
import './ContentPage.css';
import { SelectedContentProvider } from '../features/content/context/SelectedContentContext';

export default function ContentPage() {
  return (
    <main className="content-page">
      <SelectedContentProvider>
        <aside className="sidebar-column">
          <Sidebar />
        </aside>

        <section className="main-column">
          <ContentArea />
          <Footer />
        </section>
      </SelectedContentProvider>
    </main>
  );
}
