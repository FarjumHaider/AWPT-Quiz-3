import React from "react";
import Service from './Service';
const ServiceList = () => {
    const services = [
        {
            name: 'Lorem Ipsum',
            details: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
            logo: 'bx bxl-dribbble',
            box: 'col-lg-4 col-md-6 d-flex align-items-stretch',
            position: '100',
            box_color: 'icon-box iconbox-blue'

        },
        {
            name: 'Sed Perspiciatis',
            details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
            logo: 'bx bx-file',
            box: 'col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0',
            position: '200',
            box_color: 'icon-box iconbox-orange'

        },        
        {
            name: 'Magni Dolores',
            details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
            logo: 'bx bx-tachometer',
            box: 'col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0',
            position: '300',
            box_color: 'icon-box iconbox-pink'

        },
        {
            name: 'Nemo Enim',
            details: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
            logo: 'bx bx-layer',
            box: 'col-lg-4 col-md-6 d-flex align-items-stretch mt-4',
            position: '100',
            box_color: 'icon-box iconbox-yellow'

        },
        {
            name: 'Dele Cardo',
            details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
            logo: 'bx bx-slideshow',
            box: 'col-lg-4 col-md-6 d-flex align-items-stretch mt-4',
            position: '200',
            box_color: 'icon-box iconbox-red'

        },
        {
            name: 'Divera Don',
            details: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur',
            logo: 'bx bx-arch',
            box: 'col-lg-4 col-md-6 d-flex align-items-stretch mt-4',
            position: '300',
            box_color: 'icon-box iconbox-teal'

        }
        
    ];
    return (
        <>
            <h1></h1>
            <ul>
                <section id="services" class="services">
                    <div class="container">
                        <div class="section-title">
                            <h2>Services</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div class="row">
                            {services.map((service) => <Service name={service.name} details={service.details} logo={service.logo} box={service.box} position={service.position} box_color={service.box_color} />)}
                        </div>
                    </div>
                </section>
            </ul>
        </>
    );
}



export default ServiceList;

