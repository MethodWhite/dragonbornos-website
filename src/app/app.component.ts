import { Component } from '@angular/core';

interface SecurityFeature {
  icon: string;
  title: string;
  description: string;
}

interface Device {
  name: string;
  codename: string;
  soc: string;
  status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'DragonBornOS';

  features: SecurityFeature[] = [
    {
      icon: 'fa-solid fa-shield-haltered',
      title: 'Hardened Malloc',
      description: 'Memory allocator hardened against heap exploitation with guard pages, random offsets, and canary checks to prevent use-after-free and heap overflow attacks.'
    },
    {
      icon: 'fa-solid fa-code-branch',
      title: 'Control Flow Integrity (CFI)',
      description: 'Forward-edge and backward-edge CFI prevents code-reuse attacks like ROP/JOP by enforcing valid control flow transfers at runtime.'
    },
    {
      icon: 'fa-solid fa-layer-group',
      title: 'Shadow Call Stack (SCS)',
      description: 'Hardware-backed shadow stack protects function return addresses from tampering, defeating stack buffer overflow exploitation entirely.'
    },
    {
      icon: 'fa-solid fa-lock',
      title: 'SELinux Zero-Trust',
      description: 'Enforces mandatory access control with a deny-by-default policy. Every process, even init, operates with least privilege. No exceptions.'
    },
    {
      icon: 'fa-solid fa-shield-virus',
      title: 'Anti-Dump Protection',
      description: 'Kernel-level anti-debugging and anti-dumping mechanisms prevent memory extraction, process tampering, and runtime analysis of sensitive applications.'
    },
    {
      icon: 'fa-solid fa-microchip',
      title: 'Kernel Hardening',
      description: 'Linux kernel hardened with KASLR, PT-RAND, slab freelist randomization, hardened usercopy, and strict module signing enforcement.'
    }
  ];

  devices: Device[] = [
    {
      name: 'Motorola Edge 30 Neo',
      codename: 'dubai',
      soc: 'Snapdragon 695',
      status: 'Supported'
    },
    {
      name: 'POCO X3 Pro',
      codename: 'vayu',
      soc: 'Snapdragon 860',
      status: 'Supported'
    },
    {
      name: 'Huawei P Smart 2019',
      codename: 'potter',
      soc: 'Kirin 710',
      status: 'Supported'
    }
  ];

  currentYear = new Date().getFullYear();

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
