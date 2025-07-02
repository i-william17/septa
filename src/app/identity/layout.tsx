import Navbar from '@/components/header/navbar';
import Footer from '@/components/footer/footer';

export default function IdentityLayout ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}