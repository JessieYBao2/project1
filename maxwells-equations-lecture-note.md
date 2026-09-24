# Maxwell's Equations

## Lecture note for introductory electromagnetism

Maxwell's equations are the four fundamental laws that describe classical electric and magnetic fields. Together with the Lorentz force law, they explain electrostatics, circuits, electromagnetic waves, optics, and radio communication.

We use:

- \(\mathbf{E}\): electric field, in \(\mathrm{N/C}\) or \(\mathrm{V/m}\)
- \(\mathbf{B}\): magnetic field, in tesla (\(\mathrm{T}\))
- \(\rho\): electric charge density, in \(\mathrm{C/m^3}\)
- \(\mathbf{J}\): electric current density, in \(\mathrm{A/m^2}\)
- \(\varepsilon_0\): vacuum permittivity
- \(\mu_0\): vacuum permeability

## 1. The equations at a glance

| Law | Differential form | Integral form |
|---|---|---|
| Gauss's law for electricity | \(\nabla \cdot \mathbf{E} = \dfrac{\rho}{\varepsilon_0}\) | \(\displaystyle \oint_{\partial V}\mathbf{E}\cdot d\mathbf{A} = \dfrac{Q_{\text{enc}}}{\varepsilon_0}\) |
| Gauss's law for magnetism | \(\nabla \cdot \mathbf{B} = 0\) | \(\displaystyle \oint_{\partial V}\mathbf{B}\cdot d\mathbf{A} = 0\) |
| Faraday's law | \(\nabla \times \mathbf{E} = -\dfrac{\partial \mathbf{B}}{\partial t}\) | \(\displaystyle \oint_{\partial S}\mathbf{E}\cdot d\boldsymbol{\ell} = -\dfrac{d\Phi_B}{dt}\) |
| Ampère–Maxwell law | \(\nabla \times \mathbf{B} = \mu_0\mathbf{J}+\mu_0\varepsilon_0\dfrac{\partial \mathbf{E}}{\partial t}\) | \(\displaystyle \oint_{\partial S}\mathbf{B}\cdot d\boldsymbol{\ell} = \mu_0 I_{\text{enc}}+\mu_0\varepsilon_0\dfrac{d\Phi_E}{dt}\) |

Here, \(d\mathbf{A}\) is an outward-directed surface element, \(d\boldsymbol{\ell}\) follows the right-hand-rule orientation around a surface, and \(\partial V\) and \(\partial S\) denote a closed surface and its boundary curve.

## 2. Gauss's law for electricity

\[
\boxed{\nabla \cdot \mathbf{E}=\frac{\rho}{\varepsilon_0}}
\]

The electric field diverges outward from positive charge and inward toward negative charge. The integral form states that the net electric flux through a closed surface depends only on the charge enclosed:

\[
\oint_{\partial V}\mathbf{E}\cdot d\mathbf{A}
=\frac{Q_{\mathrm{enc}}}{\varepsilon_0}.
\]

### Physical interpretation

- Field lines begin on positive charges and end on negative charges.
- Charges outside the chosen closed surface can affect the local field, but their **net flux** through the surface is zero.
- The law is especially useful when the charge distribution has spherical, cylindrical, or planar symmetry.

### Example: point charge

For a point charge \(q\), choose a spherical Gaussian surface of radius \(r\). Symmetry gives

\[
E(4\pi r^2)=\frac{q}{\varepsilon_0},
\qquad
\mathbf{E}=\frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}\,\hat{\mathbf{r}}.
\]

## 3. Gauss's law for magnetism

\[
\boxed{\nabla\cdot\mathbf{B}=0}
\]

The magnetic field has no observed sources or sinks. Its integral form is

\[
\oint_{\partial V}\mathbf{B}\cdot d\mathbf{A}=0.
\]

Magnetic field lines therefore form closed loops: they do not begin or end at an isolated magnetic charge. This is often summarized by saying that **magnetic monopoles have not been observed** in classical electromagnetism.

## 4. Faraday's law of induction

\[
\boxed{\nabla\times\mathbf{E}=-\frac{\partial\mathbf{B}}{\partial t}}
\]

A changing magnetic field creates a circulating electric field. In integral form:

\[
\oint_{\partial S}\mathbf{E}\cdot d\boldsymbol{\ell}
=-\frac{d}{dt}\int_S\mathbf{B}\cdot d\mathbf{A}
=-\frac{d\Phi_B}{dt}.
\]

The minus sign is **Lenz's law**: the induced effect opposes the change in magnetic flux that produces it.

### Applications

- Generators convert mechanical motion into electrical energy.
- Transformers transfer energy between circuits.
- Induction cooking and wireless charging rely on time-varying magnetic flux.

## 5. Ampère–Maxwell law

\[
\boxed{\nabla\times\mathbf{B}
=\mu_0\mathbf{J}
+\mu_0\varepsilon_0\frac{\partial\mathbf{E}}{\partial t}}
\]

Electric currents produce circulating magnetic fields. Maxwell added the second term, called the **displacement-current term**, to account for magnetic fields produced by changing electric fields.

\[
\oint_{\partial S}\mathbf{B}\cdot d\boldsymbol{\ell}
=\mu_0 I_{\mathrm{enc}}
+\mu_0\varepsilon_0\frac{d\Phi_E}{dt}.
\]

The displacement current is not necessarily a flow of charges through the surface. For a charging capacitor, for example, conduction current flows in the wires while the changing electric field between the plates provides the matching displacement current.

## 6. Why Maxwell's correction matters

Taking the divergence of the Ampère–Maxwell equation gives

\[
0=\mu_0\nabla\cdot\mathbf{J}
+\mu_0\varepsilon_0\frac{\partial}{\partial t}
(\nabla\cdot\mathbf{E}).
\]

Using Gauss's law,

\[
\nabla\cdot\mathbf{J}+\frac{\partial\rho}{\partial t}=0,
\]

which is the **continuity equation** for electric charge. It expresses local charge conservation.

Without Maxwell's displacement-current term, Ampère's law would conflict with charge conservation in time-dependent situations.

## 7. Electromagnetic waves in vacuum

In empty space, \(\rho=0\) and \(\mathbf{J}=0\). Maxwell's equations become

\[
\nabla\cdot\mathbf{E}=0,\qquad
\nabla\cdot\mathbf{B}=0,
\]

\[
\nabla\times\mathbf{E}=-\frac{\partial\mathbf{B}}{\partial t},
\qquad
\nabla\times\mathbf{B}
=\mu_0\varepsilon_0\frac{\partial\mathbf{E}}{\partial t}.
\]

Taking the curl of Faraday's law and using the vector identity
\(\nabla\times(\nabla\times\mathbf{E})
=\nabla(\nabla\cdot\mathbf{E})-\nabla^2\mathbf{E}\)
gives the wave equation

\[
\boxed{\nabla^2\mathbf{E}
-\mu_0\varepsilon_0\frac{\partial^2\mathbf{E}}{\partial t^2}=0}.
\]

Similarly,

\[
\boxed{\nabla^2\mathbf{B}
-\mu_0\varepsilon_0\frac{\partial^2\mathbf{B}}{\partial t^2}=0}.
\]

The wave speed is

\[
c=\frac{1}{\sqrt{\mu_0\varepsilon_0}},
\]

which equals the measured speed of light. This led Maxwell to identify light as an electromagnetic wave.

For a plane wave traveling in the \(+\hat{\mathbf{x}}\) direction:

- \(\mathbf{E}\perp\mathbf{B}\)
- both fields are perpendicular to the direction of propagation
- \(\mathbf{E}\), \(\mathbf{B}\), and the propagation direction form a right-handed set
- in vacuum, \(E=cB\)

## 8. Fields in matter

In material media, it is convenient to introduce

\[
\mathbf{D}=\varepsilon_0\mathbf{E}+\mathbf{P},
\qquad
\mathbf{H}=\frac{\mathbf{B}}{\mu_0}-\mathbf{M},
\]

where \(\mathbf{P}\) is polarization and \(\mathbf{M}\) is magnetization. Maxwell's equations can then be written

\[
\nabla\cdot\mathbf{D}=\rho_{\mathrm{free}},
\qquad
\nabla\cdot\mathbf{B}=0,
\]

\[
\nabla\times\mathbf{E}=-\frac{\partial\mathbf{B}}{\partial t},
\qquad
\nabla\times\mathbf{H}
=\mathbf{J}_{\mathrm{free}}+\frac{\partial\mathbf{D}}{\partial t}.
\]

For a simple linear, isotropic medium:

\[
\mathbf{D}=\varepsilon\mathbf{E},
\qquad
\mathbf{B}=\mu\mathbf{H}.
\]

## 9. Boundary conditions

At an interface between two media, Maxwell's equations imply:

\[
\hat{\mathbf{n}}\cdot(\mathbf{D}_2-\mathbf{D}_1)=\sigma_{\mathrm{free}},
\qquad
\hat{\mathbf{n}}\cdot(\mathbf{B}_2-\mathbf{B}_1)=0,
\]

\[
\hat{\mathbf{n}}\times(\mathbf{E}_2-\mathbf{E}_1)=\mathbf{0},
\qquad
\hat{\mathbf{n}}\times(\mathbf{H}_2-\mathbf{H}_1)=\mathbf{K}_{\mathrm{free}}.
\]

Here \(\sigma_{\mathrm{free}}\) is free surface-charge density and \(\mathbf{K}_{\mathrm{free}}\) is free surface-current density.

## 10. Connection to the Lorentz force

Maxwell's equations determine the fields; the Lorentz force determines how a charge responds:

\[
\boxed{\mathbf{F}=q\left(\mathbf{E}+\mathbf{v}\times\mathbf{B}\right)}.
\]

For a continuous charge distribution, the force density is

\[
\mathbf{f}=\rho\mathbf{E}+\mathbf{J}\times\mathbf{B}.
\]

## 11. Suggested lecture questions

1. Why must the electric field of a point charge scale as \(1/r^2\)?
2. What does \(\nabla\cdot\mathbf{B}=0\) say about magnetic field lines?
3. Why is the minus sign present in Faraday's law?
4. How does a charging capacitor demonstrate the need for displacement current?
5. How do the curl equations combine to produce an electromagnetic wave?
6. Which Maxwell equation is most useful for a given symmetry: spherical, cylindrical, or planar?

## 12. Summary

The four equations can be remembered by their central ideas:

1. **Electric charge creates electric flux.**
2. **There are no isolated magnetic charges.**
3. **Changing magnetic fields create electric fields.**
4. **Electric currents and changing electric fields create magnetic fields.**

Their symmetry, consistency with charge conservation, and prediction of electromagnetic waves make Maxwell's equations one of the central achievements of classical physics.
